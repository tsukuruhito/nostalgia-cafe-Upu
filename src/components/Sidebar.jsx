import style from "../styles/sidebar.module.css";
import { Link } from "react-scroll";
import { useState } from "react";

export default function Sidebar() {
	const [isOpen, setIsOpen] = useState(false);
	const handleMenuOpen = () => {
		setIsOpen(!isOpen);
	};
	return (
		<aside className={style.sidebar}>
			<div className={style.sidebar_logo}>
				<img src="/assets/logo-w.svg" alt="Nostalgic Cafe Upu" />
			</div>
			<nav className={style.sidebar_nav}>
				<ul className={isOpen ? `${style.open}` : ""}>
					<li>
						<Link to="news" smooth={true} duration={500} offset={-50}>
							<span>News</span>
							<span>お知らせ</span>
						</Link>
					</li>
					<li>
						<Link to="concept" smooth={true} duration={500} offset={-50}>
							<span>Concept</span>
							<span>コンセプト</span>
						</Link>
					</li>
					<li>
						<Link to="menu" smooth={true} duration={500} offset={-50}>
							<span>Menu</span>
							<span>メニュー</span>
						</Link>
					</li>
					<li>
						<Link to="storeinfo" smooth={true} duration={500} offset={-50}>
							<span>Store Info</span>
							<span>店舗情報</span>
						</Link>
					</li>
				</ul>
				<div
					className={isOpen ? `${style.sidebar_navsp} ${style.open}` : `${style.sidebar_navsp}`}
					onClick={handleMenuOpen}
				>
					<span></span>
				</div>
			</nav>
			<ul className={style.sidebar_sns}>
				<li>
					<a href="#">
						<img src="/assets/icon_tw.png" alt="Twitter" width={40} height={40} />
					</a>
				</li>
				<li>
					<a href="#">
						<img src="/assets/icon_ig.png" alt="Instagram" width={40} height={40} />
					</a>
				</li>
			</ul>
		</aside>
	);
}
