import { Canvas } from '@react-three/fiber';

export default function Project() {
    return (
        <section id="projects_section" className="hidden">
            <h1>Projects</h1>
            <div className="projects">
                <button
                    type="button"
                    onclick='window.location.href="https://github.com/gefenbar/Website-Eye-Robot-full-version"'
                >
                    Final Year
                    <br />
                    Project
                </button>
            </div>
            <div className="projects">
                <button
                    type="button"
                    onclick='window.location.href="https://github.com/gefenbar/Prototype5"'
                >
                    Unity
                    <br />
                    Game
                </button>
                <br />
                <br />
                <button
                    type="button"
                    onclick='window.location.href="https://github.com/gefenbar/"'
                >
                    {" "}
                    More on my github account..
                </button>
                {/* <a id="more_github_text" href="https://github.com/gefenbar/">And more on my github account..</a> */}
            </div>
        </section>

    )
}

