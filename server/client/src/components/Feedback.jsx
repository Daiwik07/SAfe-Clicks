import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ScrollRestoration } from 'react-router-dom'

const Feedback = () => {

  const ref = useRef();

  const [feedName, setFeedName] = useState("")
  const [feedMessage, setFeedMessage] = useState("")

  const {
    handleSubmit,
    register,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async (data, e) => {
    setFeedName(data.name)
    setFeedMessage(data.message)
    e.preventDefault();
    ref.current.reset()
    const r = await fetch("http://localhost:3000/feed", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }),
    });
    let res = await r.json()
    if (res == "notadded") {
      toast.error("Your Feedback Is Not Submited")
    }
    else {
      toast.success("Your Feedback Is Successfuly Submited")
    }
  }
  const handleInputChange = () => {
    clearErrors()
  }

  let feed;
  if (feedName == "" && feedMessage == "") {
    feed = <div></div>
  }
  else {
    feed =<><hr /><div className='flex items-center my-10'><p className='font-bold text-2xl'>{feedName}:&nbsp;&nbsp;</p><p className='font-semibold text-xl'>{feedMessage}</p></div></>
  }


  return (
    <div>
      <div className="absolute w-full h-[85vh] bg-transparent flex justify-end items-center">
        <div className='w-fit bg-white flex justify-center items-center p-4 rounded-lg mr-8'>
          <div className="mt-12 flex flex-col items-center">
            <span className="mb-10 text-3xl font-bold">Feedback</span>
            <div className="w-full flex-1 mt-3">
              <div className="m-auto flex flex-col justify-center items-center h-full max-w-xs">
                <form onSubmit={handleSubmit(onSubmit)} ref={ref}>
                  <input
                    {...register("name", { required: { value: true, message: "Enter the Name" } })}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm "
                    type="text"
                    placeholder="Name"
                    id="name"
                    name="name"
                    onChange={handleInputChange}
                  />
                  {errors.name && <div className="w-full text-red-600 text-sm font-semibold">{errors.name.message}</div>}

                  <input
                    {...register("email", { required: { value: true, message: "Enter the Name" } })}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm mt-5"
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    onChange={handleInputChange}
                  />
                  {errors.email && <div className="w-full text-red-600 text-sm font-semibold">{errors.email.message}</div>}

                  <div className="relative w-full mt-5">
                    <textarea
                      {...register("message", { required: { value: true, message: "Enter the Message" } })}
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm"
                      type='text' placeholder="Message"
                      id="message"
                      name="message"
                      onChange={handleInputChange}
                    />
                  </div>
                  {errors.pass && <div className="w-full text-red-600 text-sm font-semibold">{errors.pass.message}</div>}

                  <button
                    type="submit"
                    className="mt-5 tracking-wide font-semibold bg-[#4a6a88] text-white w-full py-4 rounded-lg hover:bg-[#10161e] transition-all duration-300 ease-in-out flex items-center justify-center"
                  >
                    {isSubmitting && <span className="loader mr-3">Loading...</span>}
                    Submit Your Feedback
                  </button>

                  {errors.exist && <div className="w-full text-red-600 text-sm font-semibold">{errors.exist.message}</div>}
                  {errors.incorrect && <div className="w-full text-red-600 text-sm font-semibold">{errors.incorrect.message}</div>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.1074984762927!2d77.2795090745807!3d28.44617569252062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce0ab0465d69f%3A0xb16e6d90f6c3af06!2sAravali%20International%20School!5e0!3m2!1sen!2sin!4v1734526666622!5m2!1sen!2sin" className='relative -z-10 w-full h-[85vh] border-0' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <section>
        <p className='text-3xl font-extrabold p-4 m-2 w-full text-center'>Feedback From Other </p>
        <div>
          {feed}
          <hr />
          <div className='flex items-center my-10'>
            <p className='font-bold text-2xl'>Rajesh Sharma:&nbsp;&nbsp;</p>
            <p className='font-semibold text-xl'>The website design is sleek and modern. I really enjoyed the user interface!</p>
          </div>
          <hr />
          <div className='flex items-center my-10'>
            <p className='font-bold text-2xl'>Priya Verma:&nbsp;&nbsp;</p>
            <p className='font-semibold text-xl'>Great content and easy navigation. Keep up the good work!</p>
          </div>
          <hr />
          <div className='flex items-center my-10'>
            <p className='font-bold text-2xl'>Ankita Kapoor:&nbsp;&nbsp;</p>
            <p className='font-semibold text-xl'>I love the attention to detail on this website. Everything is very intuitive.</p>
          </div>
          <hr />
          <div className='flex items-center my-10'>
            <p className='font-bold text-2xl'>Arjun Malhotra:&nbsp;&nbsp;</p>
            <p className='font-semibold text-xl'>The performance is a bit sluggish at times, especially when navigating through multiple pages.</p>
          </div>
          <hr />
          <div className='flex items-center my-10'>
            <p className='font-bold text-2xl'>Suman Khanna:&nbsp;&nbsp;</p>
            <p className='font-semibold text-xl'>Impressive layout and the features are very user-friendly. Excellent job!</p>
          </div>
          <hr />
          <div className='flex items-center my-10'>
            <p className='font-bold text-2xl'>Vikram Singh:&nbsp;&nbsp;</p>
            <p className='font-semibold text-xl'>Some of the images take too long to load, which hampers the user experience.</p>
          </div>
          <hr />

        </div>
      </section>
      <ScrollRestoration />
    </div>
  )
}

export default Feedback
