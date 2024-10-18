const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0F1824]">
      <div className="flex max-w-5xl bg-[#0F1824] rounded-lg overflow-hidden">
        {/* Left Section: Image and Info */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <img
            src="/Download-the-new-ALLEN-app-_-enroll-for-Online-Programs-3_fzspdp.webp"
            alt="contact-image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Section: Form */}
        <div className="w-1/2  rounded-lg">
          <div className="w-full bg-gradient-to-r from-[#213663] to-[#1A243A]  p-5 flex items-start justify-start rounded-t-lg">
            <h3 className="text-xl text-start font-semibold text-white">
              Request a callback
            </h3>
          </div>
          <form className="space-y-4 py-8">
            <div className="grid grid-cols-2 gap-8">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded"
              />
              <input
                type="text"
                placeholder="Mobile Number"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded"
              />
              <input
                type="email"
                placeholder="Email ID"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded"
              />
              <select className="w-full px-4 py-3 bg-gray-800 text-white rounded">
                <option>Class</option>
              </select>
              <select className="w-full px-4 py-3 bg-gray-800 text-white rounded">
                <option>Goal</option>
              </select>
              <select className="w-full px-4 py-3 bg-gray-800 text-white rounded">
                <option>Preferred Programs</option>
              </select>
              <select className="w-full px-4 py-3 bg-gray-800 text-white rounded">
                <option>State</option>
              </select>
            </div>

            {/* Checkboxes */}
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="terms" className="h-4 w-4" />
              <label htmlFor="terms" className="text-gray-400">
                I agree to the{" "}
                <a href="#" className="underline text-blue-400">
                  terms & conditions
                </a>
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" id="authorize" className="h-4 w-4" />
              <label htmlFor="authorize" className="text-gray-400">
                I authorize ALLEN to contact me via phone/SMS & other channels
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-white text-gray-800 rounded font-semibold hover:bg-gray-300 transition">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
