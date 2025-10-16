import React from "react";

export const metadata = {
	title: "Primera Cita | Healppypets",
};

export default function PrimeraCitaLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			{children}
		</div>
	);
}
