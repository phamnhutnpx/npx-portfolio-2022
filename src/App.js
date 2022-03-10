import { Spline } from '@splinetool/react-spline';

function App() {
  return (
    <div className="flex w-screen h-screen min-h-screen flex-col relative  pb-20 items-center justify-center bg-primary">
      <div className="relative" id="home">
        <Spline scene="https://prod.spline.design/oo6IxFu8UDjFUmjD/scene.spline" />
      </div>
    </div>
  );
}

export default App;
