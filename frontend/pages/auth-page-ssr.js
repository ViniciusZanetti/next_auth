function authPageSSR(props){
  return (
    <div>
      <h1>Auth Page Server side</h1>
      <pre>
        {JSON.stringify(props, null, 2)}
      </pre>
    </div>
  )
}

export default authPageSSR;
