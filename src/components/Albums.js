import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAlbums } from '../actions/songs';
import './Albums.css';

const Albums = () => {
    const IMAGE_DIMS = 150;
    const dispatch = useDispatch();
    const searchTerm = useSelector(st => st.songs.searchTerm);
    const albumResults = useSelector(st => st.songs.allAlbums);

    useEffect(() => {
        const getAllAlbums = async (searchTerm) => {
            try {
                dispatch(getAlbums(searchTerm));
            } catch (error) {
                return error;
            }
        }
        getAllAlbums(searchTerm);
    }, [searchTerm, dispatch])

    const makeImageTag = (url) => {
        // replace w for width and h for height
        url = url.replace(/\{(w|h)\}/g, IMAGE_DIMS); 
        // return <img src={url} alt="url" className="albums-image"/>
        return <img src={url} alt="url" className="image"/>
    }

    const showTableBody = (albumResults) => {
        return albumResults.map((album, key) => (
            <tbody>
                <tr className="table-content">
                    <th scope="row">{key + 1}</th>
                    <td>{makeImageTag(album.attributes.artwork.url)}</td>
                    <td>{album.attributes.name}</td>
                    <td>{album.attributes.artistName}</td>
                    <td>{album.attributes.releaseDate}</td>
                    <td>{album.attributes.copyright}</td>
                    <td><a href={`${album.attributes.url}`}  style= {{textDecoration : "none"}} target="_blank" rel="noreferrer">...</a></td>
                </tr> 
            </tbody>
        ))
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>  
                    <th scope="col">Cover Image</th>
                    <th scope="col">Album Name</th>
                    <th scope="col">Artist Name</th>
                    <th scope="col">Release Date</th>
                    <th scope="col">Copy Right</th>
                    <th scope="col">Album Detail</th>
                    </tr>
                </thead>
                {showTableBody(albumResults)}
            </table>
        </div>
    )
}

export default Albums;