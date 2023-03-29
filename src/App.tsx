import React, { useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import "./App.css";
import Navbars from "@components/Navebars";

const App: React.FC = () => {
	return (
		<div>
			<BrowserRouter>
				<Navbars>
					<Routes>
						{/* DashBoard */}
						<Route path="/" element="ECommerce" />
						<Route path="/ecommerce" element="ECommerce" />

						{/* Pages */}
						<Route path="/orders" element="Orders" />
						<Route path="/employees" element="Employees" />
						<Route path="/customers" element="Customers" />

						{/* Apps */}
						<Route path="/kanban" element="Kanban" />
						<Route path="/editor" element="Editor" />
						<Route path="/calendar" element="Calendar" />
						<Route path="/color-picker" element="ColorPicker" />

						{/* Charts */}
						<Route path="/line" element="Line" />
						<Route path="/area" element="Area" />
						<Route path="/bar" element="Bar" />
						<Route path="/pie" element="Pie" />
						<Route path="/financial" element="Financial" />
						<Route path="/color-mapping" element="ColorMapping" />
						<Route path="/pyramid" element="Pyramid" />
						<Route path="/stacked" element="Stacked" />
					</Routes>
				</Navbars>
			</BrowserRouter>
		</div>
	);
};

export default App;
