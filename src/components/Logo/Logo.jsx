import classNames from 'classnames'
import './Logo.scss'

const Logo = (props) => {
    const {
        className,
        loading = 'lazy',
    } = props
    const title = "Home"


    return (
        <a 
        href="/" 
        className={classNames(className, 'logo')} 
        title={title} 
        area-label={title}
        >
            <img 
            src="/Logo.svg" 
            alt="" 
            className="logo__image" 
            width={199}
            height={60}
            loading={loading}
            />
        </a>
    )
}

export default Logo