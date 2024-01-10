import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data = useLoaderData();

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github Followers: {data.followers}
            <img src={data.avatar_url} alt="Gitpic" className='' width={300} />
        </div>
    )
}

export default GitHub

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/Aalekh-coder")
    return response.json()
}