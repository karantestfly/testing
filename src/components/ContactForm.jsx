import React from "react";
import { useRef } from "react";

function ContactForm() {
  let api = `https://script.google.com/macros/s/AKfycbyrwfhesfDAr1fIElX0ZwT9DqTDVQFcHNeAF8lN7eOOrU38wZelWU9wp8Cd5v8y4XE9WA/exec`

  const formRef = useRef(null)
  const handleForm = (e) => {
    e.preventDefault()
    fetch(api, {
      method: "POST",
      body: new FormData(formRef.current)
    }).then(res => {
      console.log("SUCCESSFULLY SUBMITTED")
  })
  .catch(err => console.log(err))
  }

  return (
    <div>
      <form className="my-8" onSubmit={handleForm} ref={formRef}>
        <div class="w-full md:w-1/3">
          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="name"
          >
            Name
          </label>
          <input
            class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Enter your name"
            id="name"
            name="name"
          />
        </div>
        <div class="w-full md:w-1/3">
          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="email"
          >
            Email
          </label>
          <input
            class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="email"
            placeholder="Enter your email"
            id="email"
            name="email"
          />
        </div>
        <div class="w-full md:w-1/3">
          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="phoneNumber"
          >
            Phone Number
          </label>
          <input
            class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 appearance-none"
            type="number"
            placeholder="Enter your phone number"
            id="phoneNumber"
            name="phoneNumber"
          />
        </div>
        <button
          type="submit"
          class="rounded-md bg-black px-3 py-2 mt-4 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
