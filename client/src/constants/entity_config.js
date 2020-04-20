import moment from "moment";

export const SORTINGS = [
    {
        key: "0",
        value: "0",
        text: "By Name",
        func: (r1, r2) => r1.name.localeCompare(r2.name)
    },
    {
        key: "1",
        value: "1",
        text: "By Date",
        func: (r1, r2) =>
            moment(r1.createDate, "YYYY-MM-DD HH:mm:SS").isAfter(
                moment(r2.createDate, "YYYY-MM-DD HH:mm:SS")
            )
                ? 1
                : -1
    }
];

export const CATEGORIES = [
    { key: "0", value: "0", text: "All" },
    { key: "1", value: "1", text: "Hot" },
    { key: "2", value: "2", text: "Cold" }
];