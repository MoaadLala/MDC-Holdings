import './WhiteContainer.css';

export default function WhiteContainer({ title, description, children }) {
    return (
        <>
            <hr style={{ marginTop: '1em', borderTopLeftRadius: '.5em', borderTopRightRadius: '.5em' }} className='SectionBreaker' />
            <div className="WhiteContainer">
                <hr className='Stretchbar'/>
                <h2>{title}</h2>
                <p>{description}</p>
                {children}
            </div>
        </>
    )
}