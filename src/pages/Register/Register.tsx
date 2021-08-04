import { useState } from "react";

import { gql, useMutation } from "@apollo/client";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

const REGISTER_USER = gql`
    mutation registerUser($email: String!, $password: String!) {
        registerUser(email: $email, password: $password) {
            id
            email
        }
    }
`;

interface Props {}

interface RegisterField {
    error: boolean;
    errorMessage?: string;
    value: string;
}

const INITIAL_REGISTER_STATE = { error: false, value: "" };

const Register: React.VoidFunctionComponent<Props> = () => {
    const [email, setEmail] = useState<RegisterField>(INITIAL_REGISTER_STATE);
    const [password, setPassword] = useState<RegisterField>(INITIAL_REGISTER_STATE);
    const [confirmPassword, setConfirmPassword] = useState<RegisterField>(INITIAL_REGISTER_STATE);

    const [registerUser, { error }] = useMutation(REGISTER_USER);

    const handleRegisterUser = async () => {
        if (password.value !== confirmPassword.value) {
            setPassword({ ...password, error: true });
            setConfirmPassword({
                ...confirmPassword,
                error: true,
                errorMessage: "Your passwords must match, try again!",
            });
            return;
        }

        try {
            const response = await registerUser({ variables: { email: email.value, password: password.value } });
        } catch (error) {
            setEmail(INITIAL_REGISTER_STATE);
            setPassword(INITIAL_REGISTER_STATE);
            setConfirmPassword(INITIAL_REGISTER_STATE);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img
                    className="mx-auto h-12 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                />
                <h2 className="mt-6 mb-3 text-center text-3xl font-extrabold text-gray-900">Register for an account</h2>
                <p className="text-sm text-center">
                    Already got an account?{" "}
                    <NavLink to="/login" className="underline">
                        Sign in
                    </NavLink>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    {error && (
                        <div className="rounded-md bg-red-50 p-4">
                            <div className="flex">
                                {/*<div className="flex-shrink-0">*/}
                                {/*    <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />*/}
                                {/*</div>*/}
                                <div className="ml-3">
                                    <h3 className="text-sm font-medium text-red-800">
                                        Something went wrong signing you up
                                    </h3>
                                    <div className="mt-2 text-sm text-red-700">
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>
                                                If you already have an account,{" "}
                                                <NavLink className="underline" to="/login">
                                                    sign-in instead
                                                </NavLink>
                                            </li>
                                            <li>
                                                Forgot your password?{" "}
                                                <NavLink className="underline" to="">
                                                    Reset it here
                                                </NavLink>
                                            </li>
                                            <li>
                                                Still broken?{" "}
                                                <NavLink className="underline" to="">
                                                    Get in touch
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="mt-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email address
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={email.value}
                                onChange={(e) => setEmail({ ...email, value: e.target.value })}
                                autoComplete="email"
                                required
                                placeholder="you@example.com"
                                className={classNames(
                                    "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm",
                                    {
                                        "focus:ring-indigo-500 focus:border-indigo-500": !email.error,
                                        "border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500":
                                            email.error,
                                    }
                                )}
                                aria-invalid={email.error ? "true" : "false"}
                                aria-describedby="email-error"
                            />
                            {email.error && (
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                                </div>
                            )}
                        </div>
                        {email.errorMessage && (
                            <p className="mt-2 text-sm text-red-600" id="email-error">
                                {email.error}
                            </p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="password" className="mt-4 block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={password.value}
                                onChange={(e) => setPassword({ ...password, value: e.target.value })}
                                autoComplete="new-password"
                                required
                                className={classNames(
                                    "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm",
                                    {
                                        "focus:ring-indigo-500 focus:border-indigo-500": !password.error,
                                        "border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500":
                                            password.error,
                                    }
                                )}
                                aria-invalid={password.error ? "true" : "false"}
                                aria-describedby="password-error"
                            />
                            {password.error && (
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                                </div>
                            )}
                        </div>
                        {password.errorMessage && (
                            <p className="mt-2 text-sm text-red-600" id="password-error">
                                {password.error}
                            </p>
                        )}
                    </div>

                    {password.value !== "" && (
                        <div>
                            <label htmlFor="confirm-password" className="mt-4 block text-sm font-medium text-gray-700">
                                Confirm password
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input
                                    id="confirm-password"
                                    name="confirm-password"
                                    type="password"
                                    value={confirmPassword.value}
                                    onChange={(e) => setConfirmPassword({ ...confirmPassword, value: e.target.value })}
                                    autoComplete="new-password"
                                    required
                                    className={classNames(
                                        "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm",
                                        {
                                            "focus:ring-indigo-500 focus:border-indigo-500": !confirmPassword.error,
                                            "border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500":
                                                confirmPassword.error,
                                        }
                                    )}
                                    aria-invalid={password.error ? "true" : "false"}
                                    aria-describedby="confirm-password-error"
                                />
                                {confirmPassword.error && (
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                                    </div>
                                )}
                            </div>
                            {confirmPassword.errorMessage && (
                                <p className="mt-2 text-sm text-red-600" id="confirm-password-error">
                                    {confirmPassword.errorMessage}
                                </p>
                            )}
                        </div>
                    )}

                    <div>
                        <button
                            type="submit"
                            className="mt-5 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={handleRegisterUser}
                        >
                            Register
                        </button>
                    </div>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Or continue with</span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-2">
                            <div>
                                <a
                                    href="#"
                                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                >
                                    <span className="sr-only">Sign in with Facebook</span>
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </div>

                            <div>
                                <a
                                    href="#"
                                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                >
                                    <span className="sr-only">Sign in with Discord</span>
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19.952,5.672c-1.904-1.531-4.916-1.79-5.044-1.801c-0.201-0.017-0.392,0.097-0.474,0.281 c-0.006,0.012-0.072,0.163-0.145,0.398c1.259,0.212,2.806,0.64,4.206,1.509c0.224,0.139,0.293,0.434,0.154,0.659 c-0.09,0.146-0.247,0.226-0.407,0.226c-0.086,0-0.173-0.023-0.252-0.072C15.584,5.38,12.578,5.305,12,5.305S8.415,5.38,6.011,6.872 c-0.225,0.14-0.519,0.07-0.659-0.154c-0.14-0.225-0.07-0.519,0.154-0.659c1.4-0.868,2.946-1.297,4.206-1.509 c-0.074-0.236-0.14-0.386-0.145-0.398C9.484,3.968,9.294,3.852,9.092,3.872c-0.127,0.01-3.139,0.269-5.069,1.822 C3.015,6.625,1,12.073,1,16.783c0,0.083,0.022,0.165,0.063,0.237c1.391,2.443,5.185,3.083,6.05,3.111c0.005,0,0.01,0,0.015,0 c0.153,0,0.297-0.073,0.387-0.197l0.875-1.202c-2.359-0.61-3.564-1.645-3.634-1.706c-0.198-0.175-0.217-0.477-0.042-0.675 c0.175-0.198,0.476-0.217,0.674-0.043c0.029,0.026,2.248,1.909,6.612,1.909c4.372,0,6.591-1.891,6.613-1.91 c0.198-0.172,0.5-0.154,0.674,0.045c0.174,0.198,0.155,0.499-0.042,0.673c-0.07,0.062-1.275,1.096-3.634,1.706l0.875,1.202 c0.09,0.124,0.234,0.197,0.387,0.197c0.005,0,0.01,0,0.015,0c0.865-0.027,4.659-0.667,6.05-3.111 C22.978,16.947,23,16.866,23,16.783C23,12.073,20.985,6.625,19.952,5.672z M8.891,14.87c-0.924,0-1.674-0.857-1.674-1.913 s0.749-1.913,1.674-1.913s1.674,0.857,1.674,1.913S9.816,14.87,8.891,14.87z M15.109,14.87c-0.924,0-1.674-0.857-1.674-1.913 s0.749-1.913,1.674-1.913c0.924,0,1.674,0.857,1.674,1.913S16.033,14.87,15.109,14.87z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
