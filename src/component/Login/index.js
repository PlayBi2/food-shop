import styles from './Login.module.scss'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom'
import { routes } from '../../config/routes';

const cx = classNames.bind(styles)

function Login({ children }) {
    return (
        <Tippy
            render={attrs => (
                <div className={cx('log-in__box')} tabIndex="-1" {...attrs}>
                    <Link to={routes.login} className={cx('btn', 'login-btn')}>
                        Đăng nhập
                    </Link>
                    <Link to={routes.signup} className={cx('btn', 'logout-btn')}>
                        Đăng ký
                    </Link>
                </div>
            )}
            interactive
            placement='bottom'
        >
            {children}
        </Tippy>
    )
}

export default Login