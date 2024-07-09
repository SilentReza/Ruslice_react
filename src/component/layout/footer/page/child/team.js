// icon
import {IconBrandGithub, IconBrandInstagram, IconBrandLinkedin} from "@tabler/icons-react";
// link
import {NavLink} from "react-router-dom";

export const Team = (props) => {
    return (
        <>
            <div className={'card hover-card shadow card-body worker-card'}>
                <div className={'d-flex justify-content-between align-items-center'}>
                    <div className={'progogram-title d-flex align-items-center'}>
                        <img alt={'name'} src={props.image}
                             className={'team-profile rounded-circle'}/>
                        <p className={'h6 card-title me-2 fw-bold'}>{props.name}</p>
                    </div>
                    <div className={'progogram-social'}>
                        {props.instagram !== '' ?
                            (
                                <>
                                    <NavLink target={'_blank'} to={props.instagram}>
                                        <IconBrandInstagram className={'card-title'}/>
                                    </NavLink>
                                </>
                            )
                            :
                            (<></>)
                        }
                        {props.github !== '' ?
                            (
                                <>
                                    <NavLink target={'_blank'} to={props.github}>
                                        <IconBrandGithub className={'card-title me-2'}/>
                                    </NavLink>
                                </>
                            )
                            :
                            (<></>)
                        }
                        {props.linkedin !== '' ?
                            (
                                <>
                                    <NavLink target={'_blank'} to={props.linkedin}>
                                        <IconBrandLinkedin className={'card-title me-2'}/>
                                    </NavLink>
                                </>
                            )
                            :
                            (<></>)
                        }
                    </div>
                </div>
                <div className={'card-texts mt-3'}>
                    <p className={'card-text'}>
                        {props.description}
                    </p>
                </div>
            </div>
        </>
    )
}