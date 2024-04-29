import "./style.css"
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

// const element = <FontAwesomeIcon icon="fa-kit fa-my-icon" />

function Header() {
    const navItem = ["Home", "Quote", "Resturantes", "Foods", "Contact"]

    return (
        <>
            <div className="container1">
                <div className="navdiv">
                    <nav className="navbarItem">
                        <section className="logo">
                            <img src="https://flowbite.com/docs/images/logo.svg" />
                            <p>GeekFood</p>
                        </section>

                        <section>

                            <ul className="list">
                                <li style={{ color: "#1d4ed8" }}>Home</li>
                                <li>Quote</li>
                                <li>Resturantse</li>
                                <li>Foods</li>
                                <li>Contact</li>
                            </ul>

                        </section>

                        <section>
                            <button className="getstartbtn">Get started</button>
                        </section>
                    </nav>
                </div>

                <div className="item2">
                    <h1 style={{ fontSize: "3rem", fontWeight: "800" }}>Let us find your</h1>
                    <h1 style={{ fontSize: "3rem", fontWeight: "800", color: "#be123c" }}>Forever Food.</h1>
                    <p style={{ fontSize: "1.25rem" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                    <button className="searchbtn">Search Now</button>
                    <button className="knowbtn">Know more</button>
                </div>
            </div>

            <div className="container2">
                <div className="imgdiv">
                    <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
                </div>
                <div className="paradiv">
                    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
                    <button className="touchbtn">Get in Touch</button>
                </div>
            </div>

            <div className="cardcontainer">
                <div className="card1">
                    <div className="feedback">
                        <p className="coment">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.
                        </p>
                        <div className="ceo">
                            <img src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80" />
                            <div>
                                <h5>Gladis Lennon</h5>
                                <span>Head of SEO</span>
                            </div>
                        </div>
                    </div>

                    <div className="feedback">
                        <p className="coment">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum.
                        </p>
                        <div className="ceo">
                            <img src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80" />
                            <div>
                                <h5>Gladis Lennon</h5>
                                <span>Head of SEO</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card1">
                    <div className="feedback">
                        <p className="coment">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores.
                        </p>
                        <div className="ceo">
                            <img src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80" />
                            <div>
                                <h5>Gladis Lennon</h5>
                                <span>Head of SEO</span>
                            </div>
                        </div>
                    </div>

                    <div className="feedback">
                        <p className="coment">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!
                        </p>
                        <div className="ceo">
                            <img src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80" />
                            <div>
                                <h5>Gladis Lennon</h5>
                                <span>Head of SEO</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card1">
                    <div className="feedback">
                        <p className="coment">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt.
                        </p>
                        <div className="ceo">
                            <img src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80" />
                            <div>
                                <h5>Gladis Lennon</h5>
                                <span>Head of SEO</span>
                            </div>
                        </div>
                    </div>

                    <div className="feedback">
                        <p className="coment">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!
                        </p>
                        <div className="ceo">
                            <img src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80" />
                            <div>
                                <h5>Gladis Lennon</h5>
                                <span>Head of SEO</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <div>
                    <h3>logoipsum</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.</p>
                    <div className="atag">
                        <a href="https://github.com/Raj01Patel">About</a>
                        <a href="https://github.com/Raj01Patel">Careers</a>
                        <a href="https://github.com/Raj01Patel">History</a>
                        <a href="https://github.com/Raj01Patel">Services</a>
                        <a href="https://github.com/Raj01Patel">Projects</a>
                        <a href="https://github.com/Raj01Patel">Blog</a>
                    </div>
                    <div className="icon">
                        <div>
                        <i><FaFacebook /></i>
                        <i><GrInstagram /></i>
                        <i><FaTwitter /></i>
                        <i><FaGithub /></i>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Header