import {useState} from 'react'
import { HeartIcon } from '@heroicons/react/outline'
import { HeartIcon as HeartFilled } from '@heroicons/react/solid'
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../firebase'

const Album = ({ id,  cover, title, liked }) => {
    const [like, setLike] = useState(liked)

    /* function to update checked state in document in firestore */
      const handleLikedChange = async () => {
        const taskDocRef = doc(db, 'albums', id)
        try{
          await updateDoc(taskDocRef, {
            liked: like,
          })
          setLike(!like)
        } catch (err) {
          alert(err)
        }
      }
      

  return (
    <div className='bg-white shadow-xl rounded-md hover:scale-105 transition duration-200'>
        <div>
              <img src={cover} alt="" className='w-full object-cover rounded-t-md' />
              <div className='flex px-2 py-2 items-center justify-between'>
                <p className='text-lg font-semibold'>
                  {title}
                </p>
                <div onClick={handleLikedChange}>
                    
                    {
                        liked ? (
                            <HeartFilled className="h-8 cursor-pointer text-red-600" />
                        ) : (
                            <HeartIcon className='h-8 cursor-pointer ' />
                        )
                    }
                </div>
              </div>
            </div>
    </div>
  )
}

export default Album