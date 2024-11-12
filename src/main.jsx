import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import {Login} from './pages/Login.jsx'
import {SignUp} from './pages/SignUp.jsx'
import {AllPosts} from './pages/AllPosts.jsx'
import AddPost from './pages/AddPost.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'
import { AuthLayout} from './components/index.js'
import TermsAndConditions from './pages/TermAndConditions.jsx'
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx"
import Licensing from './pages/Licensing.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <SignUp />
                </AuthLayout>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AllPosts />
                </AuthLayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
        {
            path: "/term-and-conditions",
            element: <TermsAndConditions/>,
        },
        {
            path: "/privacy-policy",
            element: <PrivacyPolicy/>,
        },
        {
            path: "/licensing",
            element: <Licensing/>,
        },
       
    ],
},
],{
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true
}
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
  <RouterProvider router={router}/>
  </Provider>
</StrictMode>,
)
