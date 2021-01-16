import * as React from "react";
import {GetPostsResponse} from "../generated/posts_pb";
import useSWR from "swr";
import Layout from "../components/layouts/Layout";
import {Form, FormState} from "../components/Form";
import {Article} from "../components/Article";
import {Header} from "../components/Header";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function Home() {
  const { data, error, mutate } = useSWR<GetPostsResponse.AsObject>('/api/getPosts', fetcher)
  const addPost = async (form: FormState) => {
    await fetch('/api/addPost', { method: 'POST', body: JSON.stringify(form)} )
    await mutate()
  }

  return (
    <Layout>
      <Header/>
      <Form submit={addPost}/>
      { !data ? '' : <h1 className="title is-4 mt-6">Posts</h1> }
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
