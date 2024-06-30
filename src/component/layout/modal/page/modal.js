// style
import './../css/modal.css'
// component
import {Team} from "./child/team";
// image
import banner from "../../../../original/image/progogram.jfif";
// icons
import {IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconX} from "@tabler/icons-react";
// link
import {Link} from "react-router-dom";

export const Modal = () => {
    const members = [
        {
            name: 'علی راستی',
            image: require('./../../../../original/image/ali.jfif'),
            description: 'بازار یاب و طراح رابط کاربری خوش ذوق مرندی !',
            instagram: 'https://www.instagram.com/alirasti.official?igsh=MWRxdnR5eGVvdGlkYw=='
        },
        {
            name: 'مهدی محمد زاده',
            image: require('./../../../../original/image/mahdi.jfif'),
            description: 'بک اند دولوپر حرفه ای و با حوصله',
            instagram: 'https://www.instagram.com/mhdiamz?igsh=a2NxNjFxenU4OXNv',
            github: 'https://github.com/ismahdi',
            linkedin: 'https://www.linkedin.com/in/mahdi-aghamohammadzadeh/',
        },
        {
            name: 'پویا رحمان زاده',
            image: require('./../../../../original/image/pouya.png'),
            description: 'مغز متفکر و بهترین توسعه دهنده اپلیکیشن',
            instagram: 'https://www.instagram.com/p1ouy3a?igsh=MW84cHQ2bXQyaGtzdA==',
            github: 'https://github.com/PouyAium',
            linkedin: 'https://www.linkedin.com/in/pouya-rahmanzadeh-7b5624254/',
        },
        {
            name: 'مهدی ذوالفقار پور',
            image: require('./../../../../original/image/sins.jpg'),
            description: 'فرانت دولوپر خوش سلیقه و حساس',
            instagram: '',
        },
        {
            name: 'امیر اولیایی',
            image: require('./../../../../original/image/amir.jfif'),
            description: 'فرانت دولوپر خوش ذوق و دیتیل پرداز',
            instagram: 'https://www.instagram.com/amir.olyai?igsh=MXh3cnN3dXlqNXlkcw==',
            github: 'https://github.com/Amirmohammad-Olyaii',
        },
        {
            name: 'سارا عبداللهی',
            image: require('./../../../../original/image/sara.jpg'),
            description: 'فرانت دولوپر با حوصله و خوش سلیقه',
            instagram: 'https://www.instagram.com/lsara____pvl?igsh=ZW1jemcyYjl1cXdv',
            github: 'https://github.com/Degianus',
        },
    ]
    return (
        <>
            <section className="modal fade" id="progogram-modal">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0 justify-content-end">
                            <IconX data-bs-dismiss="modal" color={'#FEFEFE'}/>
                        </div>
                        <div className="modal-body text-center">
                            <img alt={'progogram'} src={banner} className="progogram-logo rounded-circle"/>
                            <p className="card-title text-center fw-bold mt-2">ProGoGram</p>
                            <div className="row justify-content-center mt-3">
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
                                                <img alt="name" src={require('./../../../../original/image/reza.jfif')}
                                                     className="team-profile rounded-circle"/>
                                                <p className="h6 card-title me-2 fw-bold">رضا مهوشی</p>
                                            </div>
                                            <div className="progogram-social">
                                                <Link target={'_blank'}
                                                      to={'https://www.instagram.com/__rezamahvashi__/'}>
                                                    <IconBrandInstagram className="card-title ms-2"/>
                                                </Link>
                                                <Link target={'-_blank'}
                                                      to={'https://github.com/SilentReza'}>
                                                    <IconBrandGithub className="card-title ms-2"/>
                                                </Link>
                                                <Link target={'-_blank'}
                                                      to={'https://www.linkedin.com/in/reza-mahvashi/'}>
                                                    <IconBrandLinkedin className="card-title"/>
                                                </Link>
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
                                                <img alt="name" src={require('./../../../../original/image/negin.jpg')}
                                                     className="team-profile rounded-circle"/>
                                                <p className="h6 card-title me-2 fw-bold">نگین ملکی</p>
                                            </div>
                                            <div className="progogram-social">
                                                <Link target={'_blank'}
                                                      to={'https://www.instagram.com/neginmaleki__?igsh=MTRrNDNzN2lhaXk0NA=='}>
                                                    <IconBrandInstagram className="card-title"/>
                                                </Link>
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
                                                     src={require('./../../../../original/image/progogram.jfif')}
                                                     className="team-profile rounded-circle"/>
                                                <p className="h6 card-title me-2 fw-bold">درباره تیم</p>
                                            </div>
                                            <div className="progogram-social">
                                                <Link target={'_blank'} to={'https://www.instagram.com/progogram'}>
                                                    <IconBrandInstagram className="card-title ms-2"/>
                                                </Link>
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