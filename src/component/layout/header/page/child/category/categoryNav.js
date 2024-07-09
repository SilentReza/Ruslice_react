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
                            <img src={divider} alt={'divider'} className={'divider w-100'}/>
                        </div>
                        <div className={'modal-body'}>
                            <div className={'row'}>
                                {props.categories.map((category, index) =>
                                    <>
                                        <div key={index} className={'col-lg-4 col-6 mb-3'}>
                                            <Category category={category}/>
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