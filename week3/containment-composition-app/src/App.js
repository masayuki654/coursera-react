import "./App.css"

function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children} {/* FancyBorderタグで囲まれた子要素を取得 */}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting.
      </p>
    </FancyBorder>
  )
}

function App() {
  return (
    <WelcomeDialog />
  );
}

export default App;
