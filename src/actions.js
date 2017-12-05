import Api from "./Api";

export function fetchTickets() {
    return function(dispatch, getState) {
        const page = getState().tickets.page;

        Api.events(page).then(tickets => {
            dispatch({
                type: "TICKETS_FETCHED",
                tickets
            });
        });
    };
}
