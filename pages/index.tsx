import * as React from "react";
import {GetPostsResponse, Post} from "../generated/posts_pb";
import useSWR from "swr";
import {FormEvent, useState} from "react";
import Layout from "../components/layouts/layout";

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
      <div className="card">
        <div className="card-content">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <input type="text" className="input" value={form.title} onChange={(e) => { setForm({ ...form, title: e.target.value})}} />
              </div>
            </div>
            <div className="field">
              <label className="label">Content</label>
              <div className="control">
                <input type="text" className="input" value={form.content} onChange={(e) => { setForm({ ...form, content: e.target.value})}} />
              </div>
            </div>
            <button type="submit" className="button is-link">Submit</button>
          </form>
        </div>
      </div>
  )
}

type ArticleProps = {
  post: Post.AsObject
}
const Article: React.FC<ArticleProps> = ({post}) => {
  return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={`https://picsum.photos/id/${post.id * 10}/128/128`} alt="Image"/>
            </figure>
          </div>
          <div className="media-content">
            <h1 className="has-text-weight-bold is-size-5">{post.title}</h1>
            <p>{post.content}</p>
          </div>
        </article>
      </div>
      )
}

const HeroTitle: React.FC = () => {
  return (
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Next.js + gRPC Sample
            </h1>
            <h2 className="subtitle">
              Sample projects for Next.js + gRPC
            </h2>
          </div>
        </div>
      </section>
  )
}

export default function Home() {
  const { data, error, mutate } = useSWR<GetPostsResponse.AsObject>('/api/getPosts', fetcher)
  const addPost = async (form: FormState) => {
    await fetch('/api/addPost', { method: 'POST', body: JSON.stringify(form)} )
    await mutate()
  }

  return (
    <Layout>
      <HeroTitle/>
      <Form submit={addPost}/>
      <h1 className="title is-4 mt-6">Posts</h1>
      <div>
        {
          data?.postsList.map((p, index) => {
            return <Article post={p} key={index}/>
          })
        }
      </div>
    </Layout>
  )
}
