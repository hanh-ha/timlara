import React from 'react';
import { Sidebar } from '../../../../components';
import { MenuPopupState } from '../../../../components/Account/AccountButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Checkbox from '@material-ui/core/Checkbox';

export const ZalopayMethod = () => {
	return (
		<div className='page-wrapper'>
			<div className='page-left'>
				<div className='page_sidebar'>
					<Sidebar />
				</div>
			</div>
			<div className='page-right'>
				<div className='page_menu'>
					<MenuPopupState />
				</div>
				<div className='tab__wrapper configuration payment-Method'>
					<div className='Breadcrumb'>
						<span>Cấu Hình</span>
						<span>
							<ArrowForwardIosIcon />
						</span>
						<span>Phương Thức Thanh Toán</span>
						<span>
							<ArrowForwardIosIcon />
						</span>
						<span>Ví Điện Tử Zalopay</span>
					</div>
					<div className=' momoMethod'>
						<div className='tutorial'>
							<strong>Hướng dẫn cấu hình Zalopay</strong>
							<ul>
								<li>1. Đăng ký dịch vụ với Zalopay</li>
								<li>2. Zalo gửi bạn 3 thông số ID, Key I, Key II</li>
								<li>3. Nhập các thông số AppID, Key I, Key II vào ô bên phải</li>
							</ul>
						</div>
						<div className='setting'>
							<div className=' form-modal '>
								<div className='form-modal__content'>
									<form>
										<div className='setting-form'>
											<div className='item title'>
												<label htmlFor=''>
													<strong> Tên phương thức</strong>
												</label>
												<input className='form-input' placeholder='Thanh toán online qua ứng dụng Zalopay' disabled />
											</div>
											<div className='item'>
												<label htmlFor=''>
													<strong>App ID</strong>
												</label>
												<input className='form-input' placeholder='Nhập tại đây...' />
											</div>
											<div className='item'>
												<label htmlFor=''>
													<strong>Key I</strong>
												</label>
												<input className='form-input' placeholder='Nhập tại đây...' />
											</div>
											<div className='item'>
												<label htmlFor=''>
													<strong>Key II</strong>
												</label>
												<input className='form-input' placeholder='Nhập tại đây...' />
											</div>
											<div className='item check-box'>
												<span>
													<Checkbox />
												</span>
												<span>Chế độ test</span>
											</div>
											<div className='item unactive'>
												<label htmlFor=''>
													<strong>Email</strong>
												</label>
												<input className='form-input' placeholder='Nhập mật khẩu' disabled />
											</div>
										</div>
										<div className='form_button'>
											<div className='check-box'>
												<span>
													<Checkbox />
												</span>
												<span>Khi giao dịch thanh toán thành công sẽ gửi email đến cho khách hàng</span>
											</div>
											<button className='button_save'>Kích hoạt</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
