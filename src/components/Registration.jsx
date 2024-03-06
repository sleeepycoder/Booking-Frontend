import { useNavigate } from "react-router-dom"


const Registration = () => {
const Navigate =useNavigate()
const handleClick=() => {
Navigate('/')

}



  return (
    <div className="auth_auth_bg__LFGld font-serif bg-cover min-h-screen bg-no-repeat flex justify-center items-center">
  <div className="auth_log_img__n_fzc  flex-1">
    <div className="mr-4">
      <img src="https://bookinghub.pixelnx.com/auth/logimg.png" alt="main logo" className="auth_img_main__bTfFM" />
    </div>
    {/* <img className='absolute top-1% left-20%  animate-infinite animate-alternate' src="https://bookinghub.pixelnx.com/auth/Ticket_iocn.png" alt="ticket icon" className="auth_sm_img__gIypV" />
    <img src="https://bookinghub.pixelnx.com/auth/Event.png" alt="event icon" className="auth_sm_img1__Yo2mf" />
    <img src="https://bookinghub.pixelnx.com/auth/Hotel.png" alt="hotel icon" className="auth_sm_img2__e3ikx" />
    <img src="https://bookinghub.pixelnx.com/auth/Travel_bg.png" alt="travel background" className="auth_sm_img3__s4_O0" /> */}
  </div>
  <div className="auth_auth_wrapper_main__m7_VL bg-gray-400 mx-10 w-[600px]">
    <div className="auth_auth_wrapper__Aq7dh border-4 rounded-lg h-auto">
      <div className="auth_auth_card_body__DM1Ob rtl_auth_card">
        <form>
          <div className="mb-4 ">
            <img src="https://bookinghub.pixelnx.com/Logo.png" alt="logo" className="w-30 mt-10 h-auto" />
          </div>
          <h3 className="pt-4 text-5xl font-semibold">Hello! Welcome Back</h3>
          <p className="text-gray-600 text-start mx-4 mt-4">Please Sign Up To Your Account To Continue.</p>
          <div className="mb-4 p-4 text-start">
            <label className="block text-gray-700 text-sm te font-bold mb-2" htmlFor="Full Name">FullName <span className="text-red-500">*</span></label>
            <input className="input inline-block w-full h-12 rounded-lg  " placeholder="Enter Full Name" type="FullName" name="FullName" />
          </div>
         
          <div className="mb-4 p-4 text-start">
            <label className="block text-gray-700 text-sm te font-bold mb-2" htmlFor="email">Email <span className="text-red-500">*</span></label>
            <input className="input inline-block w-full h-12 rounded-lg  " placeholder="Enter email" type="email" name="email" />
          </div>
          <div className="mb-4 p-4 text-start">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password <span className="text-red-500">*</span></label>
            <div className="relative">
              <input className="input pr-10 w-full inline-block rounded-lg h-12" placeholder="Enter password" type="password" name="password" />
              <span className="auth_icon absolute inset-y-0 right-0 flex items-center pr-3">
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="18" viewBox="0 0 24 24" strokeWidth="1" stroke="#78909C" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"></path>
                </svg> */}
              </span>
            </div>
          </div>

          <button type="submit" className="ap_btn ap_btn_full bg-red-800 p-4 px-7 text-xl font-semibold  rounded-lg"  onClick={handleClick}>Sign Up!</button>
          <div className="mt-4 mb-6 text-gray-600">I have an account? <a href="/login" className="text-blue-500">Login</a></div>
        </form>
      </div>
    </div>
  </div>
</div>
  )
}

export default Registration
