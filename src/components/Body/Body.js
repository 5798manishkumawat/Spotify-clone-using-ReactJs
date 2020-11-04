import React from "react";
import { useDataLayerValue } from "../../DataLayer";
import Header from "../Header/Header";
import SongRow from "../SongRow/SongRow";
import "./Body.css";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
function Body({ spotify }) {
	const [{ global50 }, dispatch] = useDataLayerValue();
	console.log(global50);
	return (
		<div className="body">
			<Header spotify={spotify} />
			<div className="body_info">
				<img src={global50?.images[0].url} alt="" />
				<div className="body_infoText">
					<strong>PLAYLIST</strong>
					<h2>{global50?.name}</h2>
					<p>{global50?.description}</p>
				</div>
			</div>
			<div className="body_songs">
				<div className="body_icons">
					<PlayCircleFilledIcon className="body_shuffle" />
					<FavoriteIcon fontSize="large" />
					<MoreHorizIcon />
				</div>
				{global50?.tracks.items.map((item) => {
					return <SongRow track={item.track} />;
				})}
			</div>
		</div>
	);
}

export default Body;
