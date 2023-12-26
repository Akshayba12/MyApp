import { CContainer, CFormInput } from "@coreui/react";

function Home() {
  return (
    <div>
      <h1>Login Page</h1>
      <CContainer>
        <CFormInput
          type="email"
          id="floatingInput"
          floatingClassName="mb-3"
          floatingLabel="Email address"
          placeholder="name@example.com"
        />
        <CFormInput
          type="password"
          id="floatingPassword"
          floatingLabel="Password"
          placeholder="Password"
        />
      </CContainer>

      <button>Login</button>
    </div>
  );
}

export default Home;
