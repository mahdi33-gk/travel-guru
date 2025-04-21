import React from "react";
import Nav from "../Nav/Nav";

const Login = () => {
  return (
    <div >
      <div>
        <Nav></Nav>
      </div>

      <div className="">
      <div className="min-h-screen  flex items-center justify-center bg-gray-100">
      <div className="bg-white border rounded-md p-8 w-11/12 mx-auto max-w-sm shadow-sm">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <form className="space-y-4 sm:">
          <div>
            <label className="block text-sm text-gray-700">Username or Email</label>
            <input
              type="text"
              className="w-full border-b focus:outline-none focus:border-orange-500 py-1"
              placeholder=""
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Passowrd</label> {/* Keeping the typo for fidelity */}
            <input
              type="password"
              className="w-full border-b focus:outline-none focus:border-orange-500 py-1"
              placeholder=""
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </label>
            <a href="#" className="text-orange-500 hover:underline">
              Forgot Password
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded mt-2"
          >
            Login
          </button>
          <p className="text-center text-sm text-gray-600 mt-4">
            Don’t have an account?{" "}
            <a href="#" className="text-orange-500 hover:underline">
              Create an account
            </a>
          </p>
        </form>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Login;
