import React, { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const loadMessage = async () => {
		try {
			const backendUrl = import.meta.env.VITE_BACKEND_URL

			if (!backendUrl) throw new Error("VITE_BACKEND_URL is not defined in .env file")

			const response = await fetch(backendUrl + "/api/hello")
			const data = await response.json()

			if (response.ok) dispatch({ type: "set_hello", payload: data.message })

			return data

		} catch (error) {
			if (error.message) throw new Error(
				`Could not fetch the message from the backend.
				Please check if the backend is running and the backend port is public.`
			);
		}

	}

	useEffect(() => {
		loadMessage()
	}, [])

	return (
		<div className="container py-5">
			<div className="row align-items-center">
				<div className="col-md-6">
					<h1 className="display-4 fw-bold">Welcome to Your Authentication App</h1>
					<p className="lead text-muted">
						This is a full-stack authentication system built with Flask and React.
					</p>
					<a href="/signup" className="btn btn-primary btn-lg me-3">
						Sign Up
					</a>
					<a href="/login" className="btn btn-outline-secondary btn-lg">
						Login
					</a>
				</div>
			</div>
		</div>
	);
}; 