import { useLocation } from "react-router-dom";

const useGames = () => {
    const query = new URLSearchParams(useLocation().search);

    return [
        { id: "warzone", name: "Warzone", current: query.get("game") === "warzone" },
        { id: "modern-warfare", name: "MW", current: query.get("game") === "modern-warfare" },
        { id: "black-ops", name: "Black Ops", current: query.get("game") === "black-ops" },
        { id: "battlefield", name: "Battlefield", current: query.get("game") === "battlefield" },
        { id: "splitgate", name: "Splitgate", current: query.get("game") === "splitgate" },
        { id: "fallguys", name: "Fallguys", current: query.get("game") === "fallguys" },
    ];
};

export default useGames;
