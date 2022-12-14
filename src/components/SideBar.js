import { FiberManualRecordOutlined } from '@mui/icons-material'
import CreateIcon from '@mui/icons-material/Create';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import React from 'react'
import styled from 'styled-components'
import SideBarOption from './SideBarOption';
import { useCollection } from "react-firebase-hooks/firestore"
import { db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';


function SideBar() {
    const [channels]  = useCollection(db.collection("rooms"));
    const [user] = useAuthState(auth);

  return (
    <SideBarContainer 
        onClick={addChannelOption ? addChannel : selectChannel}
    >
        <SideBarHeader>
            <SideBarInfo>
                <h2>Blah Blah</h2>
                <h3>
                    <FiberManualRecordOutlined/>
                    Fawwaz
                </h3>
            </SideBarInfo>
            <CreateIcon />
        </SideBarHeader>

        <SideBarOption Icon={InsertCommentIcon} title="Threads" />
        <SideBarOption Icon={InboxIcon} title="Mentions & reactions" />
        <SideBarOption Icon={DraftsIcon} title="Saved Items" />
        <SideBarOption Icon={BookmarkBorderIcon} title="Channel Browser" />
        <SideBarOption Icon={PeopleAltIcon} title="People & user groups" />
        <SideBarOption Icon={AppsIcon} title="Apps" />
        <SideBarOption Icon={FileCopyIcon} title="File Browser" />
        <SideBarOption Icon={ExpandLessIcon} title="Show less" />
        <hr />
        <SideBarOption Icon={ExpandMoreIcon} title="Channels" />
        <hr />
        <SideBarOption Icon={AddIcon} addChannelOption title="Add Channel" />

        {channels?.docs.map(doc => (
            <SidebarOption 
            key={doc.id} 
            id={doc.id} 
            title={doc.data().name} 
            />
        ))}

    </SideBarContainer>
  )
}

export default SideBar

const SideBarContainer = styled.div`
    color: white;
    background-color: var(--slack-color);
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;

    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;
    }
`

const SideBarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;

    > .MuiSvgIcon-root {
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
`

const SideBarInfo = styled.div`
    flex: 1;

    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }

    > h3 > .MuiSvgIcon-root {
         font-size: 14px;
         margin-top: 1px;
         margin-right: 2px;
         color: green;
    }
`