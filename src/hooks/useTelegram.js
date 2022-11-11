const tg = window.Telegram.WebApp;

export function useTelegram() {
	try {
		// tg.expand();
		const onClose = () => {
			tg.close();
		};

		const onToggleButton = () => {
			if (tg.MainButton.isVisible) {
				tg.MainButton.hide();
			} else {
				tg.MainButton.show();
			}
		};

		return {
			onClose,
			onToggleButton,
			tg,
			userId: tg.initDataUnsafe?.user?.id,
			user: tg.initDataUnsafe?.user?.username,
			firstName: tg.initDataUnsafe?.user?.first_name,
			queryId: tg.initDataUnsafe?.query_id,
		};
	} catch (error) {
		console.log(error);
	}
}
