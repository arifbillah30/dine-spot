import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import axios from "axios"; // Import axios for API calls
import { withRouter } from "react-router-dom"; // Import withRouter for navigation

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
      success: "",
      loading: false, // New loading state for form submission
    };
  }

  // Handle input changes
  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value, error: "", success: "" });
  };

  // Email validation function
  validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  // Handle form submission
  handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload

    const { email, password } = this.state;

    if (!email || !password) {
      this.setState({ error: "Please fill in all fields." });
      return;
    }

    // Validate email format
    if (!this.validateEmail(email)) {
      this.setState({ error: "Please enter a valid email address." });
      return;
    }

    this.setState({ loading: true, error: "", success: "" }); // Set loading state

    try {
      const response = await axios.post("http://localhost:5000/register", {
        email,
        password,
      });

      if (response.status === 201) {
        this.setState({
          success: "Registration successful!",
          error: "",
          loading: false,
        });

        // Redirect to login page after successful registration
        this.props.history.push("/login"); // Navigate to login page
      }
    } catch (err) {
      console.error(err);
      const errorMessage =
        err.response?.data?.message ||
        "Something went wrong. Please try again.";
      this.setState({ error: errorMessage, loading: false }); // Handle error and stop loading
    }
  };

  render() {
    const { email, password, error, success, loading } = this.state;

    return (
      <Container fluid className="bg-white">
        <Row>
          <Col md={4} lg={6} className="d-none d-md-flex bg-image"></Col>
          <Col md={8} lg={6}>
            <div className="login d-flex align-items-center py-5">
              <Container>
                <Row>
                  <Col md={9} lg={8} className="mx-auto pl-5 pr-5">
                    <h3 className="login-heading mb-4">New Buddy!</h3>
                    {error && <p className="text-danger">{error}</p>}
                    {success && <p className="text-success">{success}</p>}
                    <Form onSubmit={this.handleSubmit}>
                      <div className="form-label-group">
                        <Form.Control
                          type="email"
                          id="email"
                          placeholder="Email address"
                          value={email}
                          onChange={this.handleChange}
                        />
                        <Form.Label htmlFor="email">
                          Email address / Mobile
                        </Form.Label>
                      </div>
                      <div className="form-label-group">
                        <Form.Control
                          type="password"
                          id="password"
                          placeholder="Password"
                          value={password}
                          onChange={this.handleChange}
                        />
                        <Form.Label htmlFor="password">Password</Form.Label>
                      </div>
                      <Button
                        type="submit"
                        className="btn btn-lg btn-outline-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                        disabled={loading} // Disable button while loading
                      >
                        {loading ? "Registering..." : "Sign Up"}
                      </Button>
                      <div className="text-center pt-3">
                        Already have an account?{" "}
                        <Link className="font-weight-bold" to="/login">
                          Sign In
                        </Link>
                      </div>
                    </Form>
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(Register);
