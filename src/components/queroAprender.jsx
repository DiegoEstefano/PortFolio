export default function WantToLearn() {
  return (
    <section>
      <div className="text-center">
        <h3 className="text-3xl py-1">Desire to Learn</h3>
        <p className="text-md py-2 leading-8 text-gray-800 ">
          Here are some technologies I want to learn in the short term.
        </p>
      </div>

      <div className=" m-auto lg:flex lg:max-w-4xl gap-10">
        <div className="text-center shadow-lg p-10 rounded-xl my-10">
          <img className="m-auto" src={node} width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2">NodeJs</h3>
          <p>
            I want to learn <span className="text-teal-500">NodeJs</span> because
            besides making me a more complete developer, it will help me with
            implementing the front-end with the server side and today{" "}
            <span className="text-teal-500">Node</span> is heavily used
            in large companies like Linkedin, Uber, and Paypal.
          </p>
        </div>

        <div className="text-center shadow-lg p-10  rounded-xl my-10">
          <img className="m-auto" src={react} width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2">React Native</h3>
          <p>
            With React Native, building a mobile application is much simpler
            and faster, as the code produced is similar to{" "}
            <span className="text-teal-500">React Js</span> and all the code
            produced is converted into the native language of the IOS or
            Android system.
          </p>
        </div>

        <div className="text-center shadow-lg p-10  rounded-xl my-10">
          <img className="m-auto" src={typescript} width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2">Typescript</h3>
          <p>
            I intend to strengthen myself in{" "}
            <span className="text-teal-500">Typescript</span> to facilitate
            development and data typing.
          </p>
        </div>
      </div>
    </section>
  );
}
