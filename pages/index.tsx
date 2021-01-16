import * as React from "react";
import {GetPostsResponse} from "../generated/posts_pb";
import useSWR from "swr";
import {FormEvent, useState} from "react";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

type FormState = {
  title: string;
  content: string;
}
type FormProps = {
  submit: (form: FormState) => void
}
const Form: React.FC<FormProps> = ({submit}) => {
  const [form, setForm] = useState<FormState>({
    title: '',
    content: ''
  })
  const clearForm = () => {
    setForm({
      title: '',
      content: ''
    })
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    submit(form)
    clearForm()
  }

  return  (
  <form onSubmit={handleSubmit}>
    <label>
      title:
      <input type="text" value={form.title} onChange={(e) => { setForm({ ...form, title: e.target.value})}} />
    </label>
    <label>
      content:
      <textarea value={form.content} onChange={(e) => { setForm({ ...form, content: e.target.value})}} />
    </label>
    <input type="submit" value="Submit" />
  </form>
  )
}

export default function Home() {
  const { data, error, mutate } = useSWR<GetPostsResponse.AsObject>('/api/getPosts', fetcher)
  const addPost = async (form: FormState) => {
    console.log(form)
    await fetch('/api/addPost', { method: 'POST', body: JSON.stringify(form)} )
    await mutate()
  }

  return (
    <>
      <Form submit={addPost}/>
      <h1>Posts:</h1>
      <div>
        {
          data?.postsList.map((p, index) => {
            return (
                <article key={index}>
                  <h3>{p.title}</h3>
                  <p>{p.content}</p>
                </article>
                  )
          })
        }
      </div>
    </>
  )
}
