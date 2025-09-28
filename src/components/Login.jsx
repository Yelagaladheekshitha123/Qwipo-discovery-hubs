import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const styles = {
    root: {
        margin: 0,
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom, #008080, #FFFFFF)",
    },
    container: {
        display: "flex",
        flexDirection: "row",
        maxWidth: "1000px",
        width: "100%",
        background: "rgba(255, 255, 255, 0.95)",
        borderRadius: "12px",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
        overflow: "hidden",
    },
    imageSide: {
        flex: 1,
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    formSide: {
        flex: 1,
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    logoArea: {
        textAlign: "center",
        marginBottom: "20px",
        paddingBottom: "10px",
        borderBottom: "1px solid #E0E0E0",
        width: "100%",
    },
    platformName: {
        fontSize: "2em",
        fontWeight: "bold",
        color: "#4B0082",
        margin: 0,
    },
    tagline: {
        fontSize: "0.9em",
        color: "#666",
        fontStyle: "italic",
    },
    heading: {
        textAlign: "center",
        color: "#4B0082",
        marginTop: "15px",
        marginBottom: "20px",
    },
    form: {
        width: "100%",
        maxWidth: "350px",
        display: "flex",
        flexDirection: "column",
    },
    input: {
        padding: "12px",
        marginBottom: "15px",
        border: "1px solid #008080",
        borderRadius: "6px",
        fontSize: "1em",
    },
    optionsRow: {
        display: "flex",
        alignItems: "center",
        fontSize: "0.9em",
        marginBottom: "15px",
        color: "#555",
    },
    button: {
        padding: "12px",
        background: "#50C878",
        color: "#FFFFFF",
        border: "none",
        borderRadius: "6px",
        fontSize: "1.1em",
        fontWeight: "bold",
        cursor: "pointer",
        marginBottom: "15px",
    },
    link: {
        textAlign: "center",
        display: "block",
        fontSize: "0.9em",
        textDecoration: "none",
        color: "#555",
        marginTop: "10px",
    },
};

const Login = () => {
    const [activeForm, setActiveForm] = useState("login");
    const [showImage, setShowImage] = useState(window.innerWidth >= 768);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // ✅ put dummy users in state so we can add new ones
    const [users, setUsers] = useState([
        { email: "test1@example.com", password: "pass123" },
        { email: "doctor@pharma.com", password: "doctor123" },
        { email: "nurse@hospital.com", password: "nurse321" },
    ]);

    // For register form
    const [registerData, setRegisterData] = useState({
        name: "",
        userId: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const [resetEmail, setResetEmail] = useState("");
    const [resetPassword, setResetPassword] = useState("");

    const navigate = useNavigate();

    const toggleForms = (target) => setActiveForm(target);

    useEffect(() => {
        const handleResize = () => setShowImage(window.innerWidth >= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // ✅ LOGIN
    const handleLogin = () => {
        const user = users.find((u) => u.email === email && u.password === password);
        if (user) {
            navigate(`/home?email=${encodeURIComponent(user.email)}`);
        } else {
            alert("Invalid email or password. Try again!");
        }
    };

    // ✅ RESET
    const handleReset = (e) => {
        e.preventDefault();
        const userIndex = users.findIndex((u) => u.email === resetEmail);
        if (userIndex >= 0) {
            const updatedUsers = [...users];
            updatedUsers[userIndex].password = resetPassword;
            setUsers(updatedUsers);
            alert(`Password successfully updated for ${resetEmail}`);
            toggleForms("login");
        } else {
            alert("No account found with that email.");
        }
    };

    // ✅ REGISTER
    const handleRegister = (e) => {
        e.preventDefault();

        if (registerData.password !== registerData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const exists = users.some((u) => u.email === registerData.email);
        if (exists) {
            alert("User already exists with this email.");
            return;
        }

        const newUser = {
            email: registerData.email,
            password: registerData.password,
        };

        setUsers((prev) => [...prev, newUser]);
        alert("Registration successful! Please login.");
        setRegisterData({
            name: "",
            userId: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
        });
        toggleForms("login");
    };

    return (
        <div style={styles.root}>
            <div style={styles.container}>
                {/* Left image */}
                {showImage && (
                    <div style={styles.imageSide}>
                        <img
                            src="https://t4.ftcdn.net/jpg/04/10/15/77/360_F_410157798_tj8hwJxbPoHv6qWEIoJKDBF30mHMp9EY.jpg"
                            alt="Medical"
                            style={styles.image}
                        />
                    </div>
                )}

                {/* Right side */}
                <div style={styles.formSide}>
                    <div style={styles.logoArea}>
                        <h1 style={styles.platformName}>Pharma Connect</h1>
                        <p style={styles.tagline}>Securely Connecting Health.</p>
                    </div>

                    {/* LOGIN FORM */}
                    {activeForm === "login" && (
                        <form style={styles.form}>
                            <h2 style={styles.heading}>Welcome Back</h2>
                            <input
                                type="email"
                                placeholder="Email"
                                required
                                style={styles.input}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                required
                                style={styles.input}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div style={styles.optionsRow}>
                                <input type="checkbox" id="remember" />
                                <label htmlFor="remember" style={{ margin: "0 5px" }}>
                                    Keep me securely logged in
                                </label>
                            </div>
                            <button
                                type="button"
                                style={styles.button}
                                onClick={handleLogin}
                            >
                                Access Pharma Connect
                            </button>

                            <a
                                href="#"
                                style={styles.link}
                                onClick={(e) => {
                                    e.preventDefault();
                                    toggleForms("reset");
                                }}
                            >
                                Forgot your Password?
                            </a>
                            <a
                                href="#"
                                style={styles.link}
                                onClick={(e) => {
                                    e.preventDefault();
                                    toggleForms("register");
                                }}
                            >
                                Need to register an account?
                            </a>
                        </form>
                    )}

                    {/* RESET FORM */}
                    {/* RESET FORM */}
                    {activeForm === "reset" && (
                        <form style={styles.form} onSubmit={handleReset}>
                            <h2 style={styles.heading}>Reset Your Password</h2>
                            <input
                                type="email"
                                placeholder="Enter your Email"
                                required
                                style={styles.input}
                                value={resetEmail}
                                onChange={(e) => setResetEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Enter New Password"
                                required
                                style={styles.input}
                                value={resetPassword}
                                onChange={(e) => setResetPassword(e.target.value)}
                            />
                            <button type="submit" style={styles.button}>
                                Reset Password
                            </button>
                            <a
                                href="#"
                                style={styles.link}
                                onClick={(e) => {
                                    e.preventDefault();
                                    toggleForms("login");
                                }}
                            >
                                Back to Login
                            </a>
                        </form>
                    )}


                    {/* REGISTER FORM */}
                    {activeForm === "register" && (
                        <form style={styles.form} onSubmit={handleRegister}>
                            <h2 style={styles.heading}>Create an Account</h2>
                            <input
                                type="text"
                                placeholder="Full Name"
                                required
                                style={styles.input}
                                value={registerData.name}
                                onChange={(e) =>
                                    setRegisterData({ ...registerData, name: e.target.value })
                                }
                            />
                            <input
                                type="text"
                                placeholder="User ID / NPI"
                                required
                                style={styles.input}
                                value={registerData.userId}
                                onChange={(e) =>
                                    setRegisterData({ ...registerData, userId: e.target.value })
                                }
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                required
                                style={styles.input}
                                value={registerData.email}
                                onChange={(e) =>
                                    setRegisterData({ ...registerData, email: e.target.value })
                                }
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                required
                                style={styles.input}
                                value={registerData.phone}
                                onChange={(e) =>
                                    setRegisterData({ ...registerData, phone: e.target.value })
                                }
                            />
                            <input
                                type="password"
                                placeholder="Create Password"
                                required
                                style={styles.input}
                                value={registerData.password}
                                onChange={(e) =>
                                    setRegisterData({ ...registerData, password: e.target.value })
                                }
                            />
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                required
                                style={styles.input}
                                value={registerData.confirmPassword}
                                onChange={(e) =>
                                    setRegisterData({
                                        ...registerData,
                                        confirmPassword: e.target.value,
                                    })
                                }
                            />
                            <button type="submit" style={styles.button}>
                                Register
                            </button>
                            <a
                                href="#"
                                style={styles.link}
                                onClick={(e) => {
                                    e.preventDefault();
                                    toggleForms("login");
                                }}
                            >
                                Already have an account? Login
                            </a>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;

