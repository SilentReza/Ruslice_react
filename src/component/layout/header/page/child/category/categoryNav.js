// component
import Category from "./child/category";
// divider
import divider from './../../../../../../global/image/client/divider.png'

const CategoryNav = (props) => {
    return (
        <>
            <section className={'modal fade'} id={'category-modal'}>
                <div className={'modal-dialog modal-xl'}>
                    <div className={'modal-content'}>
                        <div className={'modal-header pt-4 pb-1 border-0 justify-content-center'}>
                            <h5 className={'text-white fw-bold mb-0 text-center'}>انتخاب دسته بندی</h5>
                        </div>
                        <div className={'modal-divider d-flex justify-content-center px-4'}>
                            <img src={divider} alt={'divider'} className={'divider'}/>
                        </div>
                        <div className={'modal-body'}>
                            <div className={'row justify-content-center'}>
                                {props.categories.map((category, index) =>
                                    <>
                                        <div key={index} className={'col-lg-3 col-6 mb-3'}>
                                            <Category index={props.index} select={props.select}
                                                      changeCategory={props.changeCategory} category={category}/>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CategoryNav;