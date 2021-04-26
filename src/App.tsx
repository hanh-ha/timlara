import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { getStore } from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { SignIn } from './pages';
import { Overview, PackagePage, AccountInformation, Store, Advertisement, RechargePackage, ConfigurationManagement, Category } from './pages';
import { Account } from './pages/account';
import { ContentPage } from './pages/configurationManagement/contentPage';
import { PaymentMethod } from './pages/configurationManagement/paymentMethod';
import { NewContentPage } from './pages/configurationManagement/contentPage/newContentPage';
import { MomoMethod } from './pages/configurationManagement/paymentMethod/momoMethod';
import { ZalopayMethod } from './pages/configurationManagement/paymentMethod/zalopayMethod';
import { PostingList } from './pages/configurationManagement/postingList';
import './assets/less/style.scss';
import { SnackbarMessage } from './components';

const globalTheme = createMuiTheme({
	palette: {
		primary: {
			main: '#41D157',
		},
		secondary: {
			main: '#212530',
		},
	},
	overrides: {
		MuiTextField: {
			root: {
				width: '100%',
			},
		},
		MuiButton: {
			sizeLarge: {
				height: 50,
				fontSize: '1em',
				minWidth: 150,
			},
		},
		MuiAccordionSummary: {
			root: {
				'&.Mui-expanded': {
					minHeight: '0',
				},
				borderTop: '3px solid #3c8dbc',
				boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
			},
			content: {
				'&.Mui-expanded': {
					margin: '10px 0',
				},
				margin: '10px 0',
			},
		},
	},
});

const App = () => {
	return (
		<MuiThemeProvider theme={globalTheme}>
			<Provider store={getStore({})}>
				<Router>
					<SnackbarMessage />
					<Switch>
						<Route exact path='/' component={Overview} />
						<Route path='/account-information' component={AccountInformation} />
						<Route path='/account' component={Account} />
						<Route path='/package' component={PackagePage} />
						<Route path='/store' component={Store} />
						<Route path='/advertisement' component={Advertisement} />
						<Route path='/recharge-package' component={RechargePackage} />
						<Route path='/category' component={Category} />
						{/* <Route path='/configuration-management' component={ContentPage} /> */}
						<Route path='/configuration-management/configuration/new-contentpage' component={NewContentPage} />
						<Route path='/configuration-management/configuration' component={ContentPage} />
						<Route path='/configuration-management/payment-method/momo' component={MomoMethod} />
						<Route path='/configuration-management/payment-method/zalopay' component={ZalopayMethod} />
						<Route path='/configuration-management/payment-method' component={PaymentMethod} />
						<Route path='/configuration-management/posting-list' component={PostingList} />
						<Route path='/configuration-management' component={ConfigurationManagement} />
					</Switch>
				</Router>
			</Provider>
		</MuiThemeProvider>
	);
};

export default App;
