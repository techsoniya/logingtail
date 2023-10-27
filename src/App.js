import React from "react";
import LoginForm from "./LoginForm";

function App() {
  return (
    <body className="h-screen bg-gradient-to-l from-purple-100 via-blue-500 to-blue-100 ">
    <div className="flex flex-col flex-auto w-full h-screen p-8"> {/* Added padding */}
      <div className="h-full flex items-center"> {/* Center content vertically */}
        <div className="max-w-md w-full mx-auto"> {/* Center content horizontally and set max-width */}
          <div className="mb-8 text-center"> {/* Center text */}
            <h1 className="text-3xl font-medium">Welcome back</h1>
            <p>Please enter your credentials to log in!</p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
    </body>
  );
}

export default App;
