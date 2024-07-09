// component
import {Team} from "./team";
// image
// @ts-ignore
import banner from "./../../../../../global/image/members/progogram.webp";
// @ts-ignore
import owner from './../../../../../global/image/members/reza.webp'
import negin from './../../../../../global/image/members/negin.jpg';
import divider from "./../../../../../global/image/client/divider.png";
// icons
import {IconBrandGithub, IconBrandInstagram, IconBrandLinkedin} from "@tabler/icons-react";
// team
import {members} from "../../../../actions/member/member";
// link
import {NavLink} from "react-router-dom";


export const Modal = () => {
    return (
        <>
            <section className="modal fade" id="progogram-modal">
                <div className="modal-dialog modal-xl">
                    <div className={'modal-header pt-4 pb-1 border-0 justify-content-center'}>
                        <h5 className={'text-white fw-bold mb-0 text-center'}>تیم پروگوگرام</h5>
                    </div>
                    <div className={'modal-divider d-flex justify-content-center px-4'}>
                        <img src={divider} alt={'divider'} className={'divider'}/>
                    </div>
                    <div className="modal-content">
                        <div className="modal-body text-center">
                            <div className="row justify-content-center">
                                {members.map((member, number) => (
                                    <div key={number} className="col-lg-4 mb-4">
                                        <Team name={member.name}
                                              image={member.image}
                                              instagram={member.instagram}
                                              github={member.github ? member.github : ''}
                                              linkedin={member.linkedin ? member.linkedin : ''}
                                              description={member.description}/>
                                    </div>
                                ))}
                                <div className="col-lg-4 mb-4">
                                    <div className="card hover-card shadow card-body worker-card">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="progogram-title d-flex align-items-center">
                                                <img alt="name" src={owner}
                                                     className="team-profile rounded-circle"/>
                                                <p className="h6 card-title me-2 fw-bold">رضا مهوشی</p>
                                            </div>
                                            <div className="progogram-social">
                                                <NavLink target={'_blank'}
                                                         to={'https://www.instagram.com/__rezamahvashi__/'}>
                                                    <IconBrandInstagram className="card-title ms-2"/>
                                                </NavLink>
                                                <NavLink target={'-_blank'}
                                                         to={'https://github.com/SilentReza'}>
                                                    <IconBrandGithub className="card-title ms-2"/>
                                                </NavLink>
                                                <NavLink target={'-_blank'}
                                                         to={'https://www.linkedin.com/in/reza-mahvashi/'}>
                                                    <IconBrandLinkedin className="card-title"/>
                                                </NavLink>
                                            </div>
                                        </div>
                                        <div className="card-texts mt-3">
                                            <p className="card-text">
                                                ریکت دولوپر و نیمچه فول استک صبور !
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <div className="card hover-card shadow card-body worker-card">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="progogram-title d-flex align-items-center">
                                                <img alt="name" src={negin}
                                                     className="team-profile rounded-circle"/>
                                                <p className="h6 card-title me-2 fw-bold">نگین ملکی</p>
                                            </div>
                                            <div className="progogram-social">
                                                <NavLink target={'_blank'}
                                                         to={'https://www.instagram.com/neginmaleki__?igsh=MTRrNDNzN2lhaXk0NA=='}>
                                                    <IconBrandInstagram className="card-title"/>
                                                </NavLink>
                                            </div>
                                        </div>
                                        <div className="card-texts mt-3">
                                            <p className="card-text">
                                                تشکر ویژه بابت همراهی تیم در این پروژه !
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <div className="card hover-card shadow card-body worker-card">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="progogram-title d-flex align-items-center">
                                                <img alt="name"
                                                     src={banner}
                                                     className="team-profile rounded-circle"/>
                                                <p className="h6 card-title me-2 fw-bold">درباره تیم</p>
                                            </div>
                                            <div className="progogram-social">
                                                <NavLink target={'_blank'} to={'https://www.instagram.com/progogram'}>
                                                    <IconBrandInstagram className="card-title ms-2"/>
                                                </NavLink>
                                            </div>
                                        </div>
                                        <div className="card-texts mt-3">
                                            <p className="card-text">
                                                یک تیم برنامه نویسی خوش ذوق و هدفمند !
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}