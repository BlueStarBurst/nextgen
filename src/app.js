import ReactDOM from "react-dom";
import './styles.scss'

function App(props) {
    return (<div className="flex gap-4 mh-100 ">
        <div className="main-spacer">
            <div className="main-back">
                <div className="main rows">
                    <h1>
                        next
                    </h1>
                    <h1 className="white">
                        gen
                    </h1>
                </div>
            </div>
        </div>
        <div className="flex max gap-5 p-5">
            <div className="flex rows gap-2">
                <h3 className="w-15 right">about</h3>
                <p className="w-85 left">
                    The internet is an incredible place. It allows anyone to access information from
                    anywhere in the world, however, it is also a major source of targeted advertising and misinformation.
                    nextgen is a community of people who want to make not just the internet but the world a better place by
                    bringing together people who want to make a difference and providing them with the tools to do so.
                </p>
            </div>
            <div className="flex rows gap-2">
                <h3 className="w-15 right">goal</h3>
                <p className="w-85 left">
                    The objective of this website is to bring important problems into the spotlight and provide a platform
                    for people to discuss and solve them. I know that many issues are big and controversial, but I believe
                    that it is important to talk about them and compromise to find a solution that works for everyone.
                </p>
            </div>
            <div className="flex rows gap-2">
                <h3 className="w-15 right">chat</h3>
                <p className="w-85 left">
                    There are a two major ways to connect with other people on this website. Joining the discord server
                    is a great way to meet new people and discuss important issues. You can also post directly onto the site
                    for a more organized discussion.
                </p>
            </div>
            <div className="flex rows gap-2">
                <h3 className="w-15 right">information</h3>
                <p className="w-85 left">
                    In order to make a difference, you need to know what you are talking about. That is why we have a
                    section dedicated to providing information about important issues. Everyone is welcome to contribute
                    to this section, but please include sources and be respectful of other people's opinions.
                </p>
            </div>
        </div>


        <div className="footer p-4">
            <p className="text-button" onClick={(e) => {
                //smooth scroll to top
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }}>back to top</p>
        </div>

    </div>)
}

// render the app component
ReactDOM.render(<App />, document.getElementById('root'));