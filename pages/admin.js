import { useState } from 'react'
import {collection, addDoc, Timestamp} from 'firebase/firestore'
import { db } from '../firebase'

const Admin = () => {
  const [title, setTitle] = useState('')
  const [cover, setCover] = useState('') 

  async function handleSubmit(e) {
    e.preventDefault()

    try {
       await addDoc(collection(db, 'albums'), {
         title: title,
         cover: cover,
         liked: false,
         created: Timestamp.now()
       })
    } catch (err) {
      alert(err)
    }
  }

  return (
    <div className='w-[70%] mx-auto'>
        <form onSubmit={handleSubmit} className='bg-black p-4 flex flex-col space-y-8' >
            <input 
              type="text" 
              name="" 
              placeholder="album cover url"
              value={cover}
              onChange={(e) => setCover(e.target.value)}  
            />

            <input 
              type="text"
              value={title}
              placeholder="album title"
              onChange={(e) => setTitle(e.target.value)} 
            />
            <button type="submit" className='bg-white w-24'>Done</button>
        </form>
    </div>
  )
}

export default Admin