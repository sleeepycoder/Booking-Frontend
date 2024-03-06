import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
      <div className="font-serif  ">
        <div className="absolute bg-no-repeat bg-cover w-full -z-10 -mt-8 -mx-8">
          <img className=" h-[700px]" src="https://bookinghub.pixelnx.com/home/assets/image/bannerBG.png" alt="" />
        </div>


        <div className="header relative flex justify-between  items-center  ">
          <div className="">
            <img className="w-full" src="https://bookinghub.pixelnx.com/home/assets/image/Logo.png" alt="" />
          </div>
          <div className="flex  text-xl  items-center ">
            <ul className=" flex">
              <li className="mx-16">Home</li>
              <li className="mx-16">Service</li>
              <li className="mx-16">Pricing Plans</li>
              <li className="mx-16">Contact</li>
            </ul>
            <div className="button border-1 bg-red-500 rounded-lg">
              <p className="px-6 m-3 text-xl">
             <Link to='/login'> Login</Link>
             
              </p>
            </div>
          </div>
        </div>


        <div className="mt-24">
          <div className="flex flex-wrap justify-center font-serif">
            <div className="flex items-center w-[50%]">
              <div className="text-left">
                <h5 className="text-2xl italic ">Hello Welcome !!</h5>
                <h3 className="text-[38px] font-extrabold">Bookinghub <span className="text-red-500 ">Booking System </span></h3>
                <h3 className="text-[38px] font-extrabold"> For  <span className="text-red-500">Multiple Business </span></h3>
                <p3 className='text-[16px] font-normal break-words '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus obcaecati
                  perferendis ipsa et, quasi ducimus beatae expedita praesentium adipisci nemo officiis
                  enim nisi porro assumenda amet at aut numquam qui.</p3>

                <div className="border-2 bg-red-500 w-[100px] rounded-lg m-4 text-center text-[16px] font-semibold text-white p-2 cursor-pointer transition hover:duration-500"><button className="">Buy Now</button></div>
              </div>
            </div>

            <div className="relative text-right w-[40%]">
              <div className="block">
                <img className="align-middle" src="https://bookinghub.pixelnx.com/home/assets/image/Image.png" alt="" />
                <img className="absolute -mt-[500px] mx-[450px]" src="https://bookinghub.pixelnx.com/home/assets/image/v1.png" alt="" />
                <img className="absolute -mt-[30px] -mx-[50px]" src="https://bookinghub.pixelnx.com/home/assets/image/v2.png" alt="" />
                {/* <img className="" src="https://bookinghub.pixelnx.com/home/assets/image/s6.png" alt=""/> */}

              </div>
            </div>

          </div>
        </div>
      </div>


      <div className="mt-16">
        <div className="flex gap-[152px] p-14 justify-center">

          <div><img className="w-[200px]" src="https://bookinghub.pixelnx.com/home/assets/image/sp1.png" alt="" /></div>
          <div><img className="w-[200px]" src="https://bookinghub.pixelnx.com/home/assets/image/sp2.png" alt="" /></div>
          <div><img className="w-[200px]" src="https://bookinghub.pixelnx.com/home/assets/image/sp3.png" alt="" /></div>
          <div><img className="w-[200px]" src="https://bookinghub.pixelnx.com/home/assets/image/sp4.png" alt="" /></div>
          <div><img className="w-[200px]" src="https://bookinghub.pixelnx.com/home/assets/image/sp5.png" alt="" /></div>
        </div>
      </div>


      {/* serviices */}

      <div className="font-serif" >
        <div className="absolute bg-cover bg-no-repeat -z-10">
          <img src="https://bookinghub.pixelnx.com/home/assets/image/service_BG.png" alt="" />
        </div>

        <div className="">
          <div className="text-center ">
            <div className="text-xl font-bold text-white rounded-2xl px-4 p-1 bg-red-500 inline-block">Services</div>
            <div className="text-5xl m-2">Booking For Professionals</div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">

            {/* 1 */}
            <div className="shadow-lg rounded-lg w-[30%] mt-10 bg-white">
              <div className="mx-4 mb-8 m-8">
                <div className="flex justify-between">
                  <img src="https://bookinghub.pixelnx.com/home/assets/image/event.png" alt="" />
                  <img src="https://bookinghub.pixelnx.com/home/assets/image/event_shadow.png" alt="" />
                </div>
                <h4 className="text-left text-xl font-semibold">Event</h4>
                <p className="text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius accusantium r?</p>
              </div>
            </div>
            {/* 2 */}

            <div className="shadow-lg bg-white w-[30%] mt-10">
              <div className="mx-4 mb-8 m-8">
                <div className="flex justify-between">
                  <img src="https://bookinghub.pixelnx.com/home/assets/image/restraurant.png" alt="" />
                  <img src="https://bookinghub.pixelnx.com/home/assets/image/res_shadow.png" alt="" />
                </div>
                <h4 className="text-left text-xl font-semibold">Restaurant</h4>
                <p className="text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius accusantium r?</p>
              </div>
            </div>

            {/* 3 */}

            <div className="shadow-lg bg-white w-[30%] mt-10">
              <div className="mx-4 mb-8 m-8">
                <div className="flex justify-between">
                  <img src="https://bookinghub.pixelnx.com/home/assets/image/club.png" alt="" />
                  <img src="https://bookinghub.pixelnx.com/home/assets/image/club_shadow.png" alt="" />
                </div>
                <h4 className="text-left text-xl font-semibold">Clubs</h4>
                <p className="text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius accusantium r?</p>
              </div>
            </div>

            {/* 4 */}

            <div className="shadow-lg bg-white w-[30%] mt-10">
              <div className="mx-4 mb-8 m-8">
                <div className="flex justify-between">
                  <img src="https://bookinghub.pixelnx.com/home/assets/image/doctor.png" alt="" />
                  <img src="https://bookinghub.pixelnx.com/home/assets/image/doc_shadow.png" alt="" />
                </div>
                <h4 className="text-left text-xl font-semibold">Doctors</h4>
                <p className="text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius accusantium r?</p>
              </div>
            </div>


            {/* 5 */}

            <div className="shadow-lg bg-white w-[30%] mt-10">
              <div className="mx-4 mb-8 m-8">
                <div className="flex justify-between">
                  <img src="https://bookinghub.pixelnx.com/home/assets/image/eng.png" alt="" />
                  <img src="https://bookinghub.pixelnx.com/home/assets/image/eng_shadow.png" alt="" />
                </div>
                <h4 className="text-left text-xl font-semibold">Engineers</h4>
                <p className="text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius accusantium r?</p>
              </div>
            </div>


            {/* 6 */}


            <div className="shadow-lg bg-white w-[30%] mt-10">
              <div className="mx-4 mb-8 m-8">
                <div className="flex justify-between">
                  <img src="https://bookinghub.pixelnx.com/home/assets/image/lawyer.png" alt="" />
                  <img src="https://bookinghub.pixelnx.com/home/assets/image/lawyer_shadow.png" alt="" />
                </div>
                <h4 className="text-left text-xl font-semibold">Lawyers</h4>
                <p className="text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius accusantium r?</p>
              </div>
            </div>

            {/* 7 */}


            <div className="shadow-lg bg-white w-[30%] mt-10">
              <div className="mx-4 mb-8 m-8">
                <div className="flex justify-between">
                  <img src="https://bookinghub.pixelnx.com/home/assets/image/tech.png" alt="" />
                  <img src="https://bookinghub.pixelnx.com/home/assets/image/tch_shadow.png" alt="" />
                </div>
                <h4 className="text-left text-xl font-semibold">Technician</h4>
                <p className="text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius accusantium r?</p>
              </div>
            </div>


            {/* 8 */}


            <div className="shadow-lg bg-white w-[30%] mt-10">
              <div className="mx-4 mb-8 m-8">
                <div className="flex justify-between">
                  <img src="https://bookinghub.pixelnx.com/home/assets/image/acc.png" alt="" />
                  <img src="https://bookinghub.pixelnx.com/home/assets/image/acc_shadow.png" alt="" />
                </div>
                <h4 className="text-left text-xl font-semibold">Accountants</h4>
                <p className="text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius accusantium r?</p>
              </div>
            </div>


            {/* next plans */}


            <div className="shadow-lg bg-white w-[30%] font-serif mt-10">
              <div className="mx-4 mb-8 m-8">
                <div className="flex justify-between">
                  <img src="https://bookinghub.pixelnx.com/home/assets/image/teacher.png" alt="" />
                  <img src="https://bookinghub.pixelnx.com/home/assets/image/teacher_shadow.png" alt="" />
                </div>
                <h4 className="text-left text-xl font-semibold">Teachers</h4>
                <p className="text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius accusantium r?</p>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className=" font-serif">
        <div className="mt-14 w-[1170px]">

          <div className="text-center">
            <div className=" text-red-700 bg-slate-300 text-2xl rounded-3xl inline-block  px-4 py-2 font-semibold ">Plans</div>
            <h3 className="text-5xl m-2">Our Pricing Plans</h3>
          </div>
          <div className="flex flex-wrap justify-center mt-10 gap-7">

            {/* 1 */}
            <div className="w-[31%] ">
              <div className="bg-red-600 relative rounded-lg p-4 shadow-lg">
                <span className="absolute top-[-6.1px] right-10  text-red-600 "> <span className="rounded-lg p-1 relative block text-center bg-gray-100  -mx-12 ">Recommended</span></span>
                <div className="  bg-slate-100 rounded-xl text-left p-3 "><h4 className="text-xl font-medium">Premium</h4>
                  <div className="block "><h3 className="text-5xl flex mt-2 items-end gap-4">$800 <span className="text-2xl ">/MONTH</span></h3></div>
                  <p className="text-lg mt-2">This is premium plan </p>
                </div>
                <div className=" pl-7 pt-6">
                  <p className="flex items-center gap-2 mt-8 text-white"><img className="w-[16px] h-[16px]" src="https://bookinghub.pixelnx.com/home/assets/image/tick.png" /> No of campaign : <span>8</span></p>
                  <p className="flex items-center gap-2 mt-8 text-white"><img className="w-[16px] h-[16px]" src="https://bookinghub.pixelnx.com/home/assets/image/tick.png" /> Free Trial <span>NA</span></p>

                </div>
                <div className="text-center block">
                  <div className="bg-gray-200  p-3 w-[150px] inline-block text-xl font-medium rounded-2xl mb-5 mt-8 ">
                    choose
                  </div>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="w-[31%]">
              <div className="border-2 relative rounded-lg p-4 shadow-lg">
                {/* <span className="absolute top-[-6.1px] right-10  text-red-600 "> <span className="rounded-lg p-1 relative block text-center bg-gray-100  -mx-12 ">Recommended</span></span> */}
                <div className="  bg-slate-100 rounded-xl text-left p-3 "><h4 className="text-xl font-medium">Gold</h4>
                  <div className="block "><h3 className="text-5xl flex mt-2 items-end gap-4">$1500 <span className="text-2xl ">/MONTH</span></h3></div>
                  <p className="text-lg mt-2">This is Gold Plane </p>
                </div>
                <div className=" pl-7 pt-6">
                  <p className="flex items-center gap-2 mt-8 text-slate-500"><img className="w-[16px] h-[16px]" src="https://bookinghub.pixelnx.com/home/assets/image/tick.png" /> No of campaign : <span>8</span></p>
                  <p className="flex items-center gap-2 mt-8 text-slate-500"><img className="w-[16px] h-[16px]" src="https://bookinghub.pixelnx.com/home/assets/image/tick.png" /> Free Trial <span>NA</span></p>

                </div>
                <div className="text-center block">
                  <div className="bg-red-600 text-white   p-3 w-[150px] inline-block text-xl font-medium rounded-2xl mb-5 mt-8 ">
                    choose
                  </div>
                </div>
              </div>
            </div>


            {/* 3 */}

            <div className="w-[31%]">
              <div className="border-2 relative rounded-lg p-4 shadow-lg">
                {/* <span className="absolute top-[-6.1px] right-10  text-red-600 "> <span className="rounded-lg p-1 relative block text-center bg-gray-100  -mx-12 ">Recommended</span></span> */}
                <div className="  bg-slate-100 rounded-xl text-left p-3 "><h4 className="text-xl font-medium">Basic</h4>
                  <div className="block "><h3 className="text-5xl flex mt-2 items-end gap-4">$500 <span className="text-2xl ">/MONTH</span></h3></div>
                  <p className="text-lg mt-2">This is Basic plan </p>
                </div>
                <div className=" pl-7 pt-6">
                  <p className="flex items-center gap-2 mt-8 text-slate-500"><img className="w-[16px] h-[16px]" src="https://bookinghub.pixelnx.com/home/assets/image/tick.png" /> No of campaign : <span>8</span></p>
                  <p className="flex items-center gap-2 mt-8 text-slate-500"><img className="w-[16px] h-[16px]" src="https://bookinghub.pixelnx.com/home/assets/image/tick.png" /> Free Trial <span>NA</span></p>

                </div>
                <div className="text-center block">
                  <div className="bg-red-600 text-white   p-3 w-[150px] inline-block text-xl font-medium rounded-2xl mb-5 mt-8 ">
                    choose
                  </div>
                </div>
              </div>
            </div>


            {/* 4 */}

            <div className="w-[31%]">
              <div className="border-2 rounded-lg relative p-4 shadow-lg">
                {/* <span className="absolute top-[-6.1px] right-10  text-red-600 "> <span className="rounded-lg p-1 relative block text-center bg-gray-100  -mx-12 ">Recommended</span></span> */}
                <div className="  bg-slate-100 rounded-xl text-left p-3 "><h4 className="text-xl font-medium">Pro</h4>
                  <div className="block "><h3 className="text-5xl flex mt-2 items-end gap-4">$1000<span className="text-2xl ">/MONTH</span></h3></div>
                  <p className="text-lg mt-2">This is Pro plan </p>
                </div>
                <div className=" pl-7 pt-6">
                  <p className="flex items-center gap-2 mt-8 text-slate-500"><img className="w-[16px] h-[16px]" src="https://bookinghub.pixelnx.com/home/assets/image/tick.png" /> No of campaign : <span>8</span></p>
                  <p className="flex items-center gap-2 mt-8 text-slate-500"><img className="w-[16px] h-[16px]" src="https://bookinghub.pixelnx.com/home/assets/image/tick.png" /> Free Trial <span>NA</span></p>

                </div>
                <div className="text-center block">
                  <div className="bg-red-600 text-white  p-3 w-[150px] inline-block text-xl font-medium rounded-2xl mb-5 mt-8 ">
                    choose
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* contact */}
      <div className="mt-12">
        <div className="">
          {/* 1 */}
          <div className="">
            <div className="text-center ">
              <div className="text-lg font-medium bg-gray-300 text-red-500 inline-block rounded-2xl p-4 px-10 mb-15">Contact</div>
              <h3 className="text-3xl font-bold mt-4">Can we help ?</h3>
            </div>
          </div>
          {/* 2 */}
          <div className="pt-8">
            <div className="">
              <div className="flex flex-wrap">
                {/* 1 */}
                <div className="w-[41%] ">
                
                  <div className="bg-white rounded-lg p-4 border-2">
                  <div className="text-start p-12 rounded-lg bg-slate-400 relative" style={{ backgroundImage: "url('https://bookinghub.pixelnx.com/home/assets/image/contact_bg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <h4 className="text-lg font-semibold pb-18 text-white">Contact Information</h4>
    <p className="text-xl font-normal pt-8 text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas minima possimus!
    </p>
    <div className="flex gap-5 pb-8 pt-10 items-center">
      <span>📧</span>
        <span className="text-white">example@gmail.com</span>
    </div>
    <div className="flex gap-5 pb-8 items-center">
      <span>📞</span>
        <span className="text-white">(603) 555-0123</span>
    </div>
    <div className="flex gap-5 pb-8 items-center">
      <span>📍</span>
        <span className="text-white">4140 Parker Rd. Allentown, New Mexico 31134</span>
    </div>
</div>

                  </div>
                </div>
                {/* 2 */}
                <div className="w-[58%] mt-6">
                <form id="contactForm" className="max-w-lg mx-auto p-6 bg-white rounded-md shadow-md">
    <div className="space-y-4">
        <div className="flex space-x-4">
            <div className="w-1/2">
                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First Name</label>
                <input type="text" name="first_name" id="first_name" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500" />
                <span id="first_name_error" className="error"></span>
            </div>
            <div className="w-1/2">
                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input type="text" name="last_name" id="last_name" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500" />
                <span id="last_name_error" className="error"></span>
            </div>
        </div>

        <div className="flex space-x-4">
            <div className="w-1/2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" id="email" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500" />
                <span id="email_error" className="error"></span>
            </div>
            <div className="w-1/2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input type="text" name="subject" id="subject" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500" />
                <span id="subject_error" className="error"></span>
            </div>
        </div>

        <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea rows="4" cols="2" name="message" id="message" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500"></textarea>
            <span id="message_error" className="error"></span>
        </div>

        <div className="mt-4">
            <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring focus:border-indigo-700" id="send_mess">
                Send Message
            </button>
        </div>
    </div>
</form>

                </div>
              </div>
            </div>

          </div>



        </div>

      </div>




{/* footer */}

<footer>
  <div className="bg-gray-800 text-white py-20 mt-12 font-serif">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <div className="flex flex-col items-center  px-10">
            <img src="https://bookinghub.pixelnx.com/home/assets/image/Logo_white.png" alt="logo" className="bh_footer_logo_img mb-3" />
            <p className="pb-3 text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur nihil natus unde cupiditate
              quasi culpa veritatis rerum soluta delectu.
            </p>
            <div className="flex gap-6">
              <a target="_blank" href="https://www.facebook.com/"><img src="https://bookinghub.pixelnx.com/home/assets/image/FB.png" alt="fb" /></a>
              <a target="_blank" href="https://twitter.com/"><img src="https://bookinghub.pixelnx.com/home/assets/image/Twitter.png" alt="twitter" /></a>
              <a target="_blank" href="https://in.pinterest.com/"><img src="https://bookinghub.pixelnx.com/home/assets/image/Pritrest.png" alt="pritrest" /></a>
              <a target="_blank" href="https://www.instagram.com/"><img src="https://bookinghub.pixelnx.com/home/assets/image/Insta.png" alt="insta" /></a>
            </div>
          </div>
        </div>

        <div className="text-start">
          <div className="bh_footer_list ">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="m-2">
              <li className="my-2"><a href="#">Hotels</a></li>
              <li className="my-2"><a href="#">Seat/Room Booking</a></li>
              <li className="my-2"><a href="#">Engineering, Industrial Services</a></li>
              <li className="my-2"><a href="#">Internet Of Things</a></li>
            </ul>
          </div>
        </div>

        <div className="text-start">
          <div className="bh_footer_list">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="m-2">
              <li className="my-2"><a href="#">Event Booking</a></li>
              <li className="my-2"><a href="#">Interactive, Analytics & Insights</a></li>
              <li className="my-2"><a href="#">Engineering, Industrial Services</a></li>
              <li className="my-2"><a href="#">Internet Of Things</a></li>
            </ul>
          </div>
        </div>

        <div className="text-start">
          <div className="bh_footer_list ">
            <h4 className="text-lg font-semibold">Express</h4>
            <ul className="m-2 ">
              <li className="my-4"><a href="#">Tax Consultant</a></li>
              <li className="my-4"><a href="#">Teachers</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div> 

    {/* <img src="home/assets/image/s5.png" alt="shape" className="bh_footer_s1 absolute top-0 left-0" />
    <img src="home/assets/image/footer_tab.png" alt="shape" className="bh_footer_s2 absolute bottom-0 left-0" />
    <img src="home/assets/image/footer_cal.png" alt="vector" className="bh_footer_s3 absolute top-0 right-0" />
    <img src="home/assets/image/footer_girl.png" alt="shape" className="bh_footer_s4 absolute bottom-0 right-0" /> */}
  </div>
</footer>

<div className="bh_copy_write text-center  py-4 bg-gray-900 text-white ">
  Copyright <span id="year">{new Date().getFullYear()}</span> <span>BookingHub</span> . All Right Reserved.
</div>







    </>

  )
}

export default Header