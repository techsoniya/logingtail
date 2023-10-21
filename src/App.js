import LoginForm from "./LoginForm";

function App() {
  return (
    <div className="flex flex-col flex-auto w-full h-screen">
      <div className="h-full">
        <div className="grid grid-cols-3 h-full">
          <div className="bg-blue-900"></div>
          <div className="col-span-2 flex justify-center items-center">
            <div className="min-w-[450] px-8">
              <div className="mb-8">
                <h1 className="text-3xl font-medium">Welcome back</h1>
                <p>Please enter your crendentials to login in!</p>

              </div>
              <LoginForm />

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
