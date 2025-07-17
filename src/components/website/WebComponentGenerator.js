'use client';
import Typography from "@website/component/Typography";
import Paragraph from "@website/component/Paragraph";
import Button from "@website/component/ButtonComponent";
import Container from "@website/component/Container";
import BlogPostComponent from "@website/component/BlogPostComponent";
import Grid from "@website/component/Grid";
import IconComponent from "@website/component/IconComponent";
import ImageComponent from "@website/component/ImageComponent";
import FeatureSection from "@website/component/FeatureSection";
import SVGComponent from "@website/component/SVGComponent";
import BlogTagsComponent from "@website/component/BlogTagsComponent";
import LottieFile from "@website/component/LottieFile";
import Form from "@website/component/Form";
import PostTitle from "@website/component/PostTitle";
import PostThumbnailComponent from "@website/component/PostThumbnailComponent";
import PostContentComponent from "@website/component/PostContentComponent";
import PostDateAddedComponent from "@website/component/PostDateAddedComponent";
import PostDateUpdatedComponent from "@website/component/PostDateUpdatedComponent";
import ShareButtonComponent from "@website/component/ShareButtonComponent";
import TestimonialComponents from "@website/component/TestimonialComponent";
import LinkComponent from "@website/component/LinkComponent";
import WebsiteLogoComponent from "@website/component/WebsiteLogoComponent";
export default function WebComponentGenerator({item,post,siteSetting}) {

    return(
        <>
            {console.log("mmm",siteSetting)}
        {item.idType === "title" &&
                <Typography key={item.uniqueId} item={item}/>}

    {item.idType === "paragraph" && <Paragraph key={item.uniqueId} item={item}/>}
    {item.idType === "button" && <Button key={item.uniqueId} item={item}/>}
    {item.idType === "container" && <Container siteSetting={siteSetting} post={post?post:{}} key={item.uniqueId} item={item}/>}
    {item.idType === "image" && <ImageComponent key={item.uniqueId} item={item}/>}
    {item.idType === "grid" && <Grid siteSetting={siteSetting} post={post?post:{}} key={item.uniqueId} item={item}/>}
    {item.idType === "lottie" && <LottieFile key={item.uniqueId} item={item}/>}
    {item.idType === "form" && <Form key={item.uniqueId} item={item}/>}
    {item.idType === "svg" && <SVGComponent key={item.uniqueId} item={item}/>}
    {item.idType === "blogTags" && <BlogTagsComponent key={item.uniqueId} item={item}/>}
    {item.idType === "blogPosts" && <BlogPostComponent key={item.uniqueId} item={item}/>}
    {item.idType === "postTitle" && <PostTitle post={post?post:{}} key={item.uniqueId} item={item}/>}
    {item.idType === "postThumbnail" && <PostThumbnailComponent post={post?post:{}} key={item.uniqueId} item={item}/>}
    {item.idType === "postContent" && <PostContentComponent post={post?post:{}} key={item.uniqueId} item={item}/>}
    {item.idType === "postDateAdded" && <PostDateAddedComponent post={post?post:{}} key={item.uniqueId} item={item}/>}
    {item.idType === "postDateUpdate" && <PostDateUpdatedComponent post={post?post:{}} key={item.uniqueId} item={item}/>}
    {item.idType === "shareButton" && <ShareButtonComponent post={post?post:{}} key={item.uniqueId} item={item}/>}
    {item.idType === "testimonial" && <TestimonialComponents post={post?post:{}} key={item.uniqueId} item={item}/>}
    {item.idType === "link" && <LinkComponent post={post?post:{}} key={item.uniqueId} item={item}/>}
    {item.idType === "logo" && <WebsiteLogoComponent siteSetting={siteSetting} key={item.uniqueId} item={item}/>}



{/*        {item.idType === "testimonial" &&*/}
{/*            <TestimonialComponent fields={components.find(c => c.uid === item.uid)?.fields}*/}
{/*                                  editDialogOpenComponentId={editDialogOpenComponentId}*/}
{/*                                  setEditDialogOpenComponentId={(v) => setEditDialogOpenComponentId(v)}*/}
{/*                                  color={siteSetting.color} dragFunc={(e) => dragFunc(e, idNumber)}*/}
{/*                                  removeItemFunc={() => removeItemFunc(idNumber)} isDesktop={isDesktop}*/}
{/*                                  key={item.uniqueId}*/}
{/*                                  editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}*/}
{/*                                  item={item}/>}*/}
{/*        {item.idType === "faq" &&*/}
{/*            <FAQComponent fields={components.find(c => c.uid === item.uid)?.fields}*/}
{/*                          editDialogOpenComponentId={editDialogOpenComponentId}*/}
{/*                          setEditDialogOpenComponentId={(v) => setEditDialogOpenComponentId(v)}*/}
{/*                          color={siteSetting.color} dragFunc={(e) => dragFunc(e, idNumber)}*/}
{/*                          removeItemFunc={() => removeItemFunc(idNumber)} isDesktop={isDesktop}*/}
{/*                          key={item.uniqueId}*/}
{/*                          editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}*/}
{/*                          item={item}/>}*/}

{/*        }*/}
{/*        {*/}
{/*            item.idType === "wysiwygEditor" &&*/}
{/*            <WysiwygEditor fields={components.find(c => c.uid === item.uid)?.fields}*/}
{/*                           editDialogOpenComponentId={editDialogOpenComponentId}*/}
{/*                           setEditDialogOpenComponentId={setEditDialogOpenComponentId}*/}
{/*                           color={siteSetting?.color}*/}
{/*                           dragFunc={(e) => dragFunc(e, idNumber)}*/}
{/*                           removeItemFunc={() => removeItemFunc(idNumber)}*/}
{/*                           isDesktop={isDesktop}*/}
{/*                           editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}*/}
{/*                           key={item.uniqueId} item={item}/>*/}
{/*        }*/}
{/*        {*/}
{/*        }*/}
{/*        {*/}
{/*            item.idType === "video" &&*/}
{/*            <VideoComponent key={item.uniqueId} fields={components.find(c => c.uid === item.uid)?.fields}*/}
{/*                            editDialogOpenComponentId={editDialogOpenComponentId}*/}
{/*                            setEditDialogOpenComponentId={setEditDialogOpenComponentId}*/}
{/*                            dragFunc={(e) => dragFunc(e, idNumber)}*/}
{/*                            removeItemFunc={() => removeItemFunc(idNumber)}*/}
{/*                            isDesktop={isDesktop}*/}
{/*                            editItem={(key, value) => editItem(idNumber, key, value)}*/}
{/*                            item={item}/>*/}
{/*        }*/}
{/*        {item.idType === "slider" &&*/}
{/*            <SliderComponent lastPost={lastPost} fields={components.find(c => c.uid === item.uid)?.fields}*/}
{/*                             editDialogOpenComponentId={editDialogOpenComponentId}*/}
{/*                             setEditDialogOpenComponentId={setEditDialogOpenComponentId}*/}
{/*                             siteSetting={siteSetting}*/}
{/*                             dragFunc={(e) => dragFunc(e, idNumber)}*/}
{/*                             removeItemFunc={() => removeItemFunc(idNumber)}*/}
{/*                             isDesktop={isDesktop} key={item.uniqueId}*/}
{/*                             idNumber={idNumber} item={item}*/}
{/*                             editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}/>}*/}
{/*        /!*{item.idType === "featuredSection" &&*!/*/}
{/*        /!*	<FeatureSection editDialogOpenComponentId={editDialogOpenComponentId}*!/*/}
{/*        /!*	                setEditDialogOpenComponentId={setEditDialogOpenComponentId}*!/*/}
{/*        /!*	                color={siteSetting.color} dragFunc={(e) => dragFunc(e, idNumber)}*!/*/}
{/*        /!*	                removeItemFunc={() => removeItemFunc(idNumber)} isDesktop={isDesktop}*!/*/}
{/*        /!*	                key={item.uniqueId} editItem={(key, value) => editItem(idNumber, key, value)}*!/*/}
{/*        /!*	                idNumber={idNumber} item={item}/>}*!/*/}
{/*        {item.idType === "iconPicker" &&*/}
{/*            <IconComponent fields={components.find(c => c.uid === item.uid)?.fields}*/}
{/*                           editDialogOpenComponentId={editDialogOpenComponentId}*/}
{/*                           setEditDialogOpenComponentId={setEditDialogOpenComponentId}*/}
{/*                           color={siteSetting.color}*/}
{/*                           dragFunc={(e) => dragFunc(e, idNumber)}*/}
{/*                           removeItemFunc={() => removeItemFunc(idNumber)}*/}
{/*                           isDesktop={isDesktop} key={item.uniqueId}*/}
{/*                           editItem={(key, value) => editItem(idNumber, key, value)}*/}
{/*                           item={item}/>}*/}
{/*        {item.idType === "blogPosts" &&*/}
{/*            <BlogPostComponent fields={components.find(c => c.uid === item.uid)?.fields}*/}
{/*                               editDialogOpenComponentId={editDialogOpenComponentId}*/}
{/*                               setEditDialogOpenComponentId={(v) => setEditDialogOpenComponentId(v)}*/}
{/*                               color={siteSetting.color} dragFunc={(e) => dragFunc(e, idNumber)}*/}
{/*                               removeItemFunc={() => removeItemFunc(idNumber)} isDesktop={isDesktop}*/}
{/*                               key={item.uniqueId}*/}
{/*                               editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}*/}
{/*                               item={item}/>}*/}
{/*        /!*{item.idType === "inventoryCard" &&*!/*/}
{/*        /!*	<InventoryComponent editDialogOpenComponentId={editDialogOpenComponentId}*!/*/}
{/*        /!*	                    setEditDialogOpenComponentId={setEditDialogOpenComponentId}*!/*/}
{/*        /!*	                    dragFunc={(e) => dragFunc(e, idNumber)}*!/*/}
{/*        /!*	                    removeItemFunc={() => removeItemFunc(idNumber)} isDesktop={isDesktop}*!/*/}
{/*        /!*	                    key={item.uniqueId} editItem={(key, value) => editItem(idNumber, key, value)}*!/*/}
{/*        /!*	                    item={item}/>}*!/*/}

{/*        {item.idType === "map" &&*/}
{/*            <Map fields={components.find(c => c.uid === item.uid)?.fields}*/}
{/*                 editDialogOpenComponentId={editDialogOpenComponentId}*/}
{/*                 setEditDialogOpenComponentId={setEditDialogOpenComponentId} color={siteSetting.color}*/}
{/*                 dragFunc={(e) => dragFunc(e, idNumber)} removeItemFunc={() => removeItemFunc(idNumber)}*/}
{/*                 isDesktop={isDesktop} key={item.uniqueId}*/}
{/*                 editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)} item={item}/>}*/}
{/*        {item.idType === "postTitle" &&*/}
{/*            <BlogTitleComponent lastPost={lastPost} fields={components.find(c => c.uid === item.uid)?.fields}*/}
{/*                                editDialogOpenComponentId={editDialogOpenComponentId}*/}
{/*                                setEditDialogOpenComponentId={setEditDialogOpenComponentId}*/}
{/*                                color={siteSetting.color}*/}
{/*                                dragFunc={(e) => dragFunc(e, idNumber)}*/}
{/*                                removeItemFunc={() => removeItemFunc(idNumber)}*/}
{/*                                isDesktop={isDesktop} key={item.uniqueId}*/}
{/*                                editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}*/}
{/*                                item={item}/>}*/}
{/*        {item.idType === "postContent" &&*/}
{/*            <PostContentComponent lastPost={lastPost} fields={components.find(c => c.uid === item.uid)?.fields}*/}
{/*                                  editDialogOpenComponentId={editDialogOpenComponentId}*/}
{/*                                  setEditDialogOpenComponentId={setEditDialogOpenComponentId}*/}
{/*                                  color={siteSetting.color}*/}
{/*                                  dragFunc={(e) => dragFunc(e, idNumber)}*/}
{/*                                  removeItemFunc={() => removeItemFunc(idNumber)}*/}
{/*                                  isDesktop={isDesktop} key={item.uniqueId}*/}
{/*                                  editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}*/}
{/*                                  item={item}/>}*/}
{/*        {item.idType === "postThumbnail" &&*/}
{/*            <PostThumbnailComponent lastPost={lastPost}*/}
{/*                                    fields={components.find(c => c.uid === item.uid)?.fields}*/}
{/*                                    editDialogOpenComponentId={editDialogOpenComponentId}*/}
{/*                                    setEditDialogOpenComponentId={setEditDialogOpenComponentId}*/}
{/*                                    color={siteSetting.color}*/}
{/*                                    dragFunc={(e) => dragFunc(e, idNumber)}*/}
{/*                                    removeItemFunc={() => removeItemFunc(idNumber)}*/}
{/*                                    isDesktop={isDesktop} key={item.uniqueId}*/}
{/*                                    editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}*/}
{/*                                    item={item}/>}*/}
{/*        {item.idType === "postDateAdded" &&*/}
{/*            <PostDateAddedComponent lastPost={lastPost}*/}
{/*                                    fields={components.find(c => c.uid === item.uid)?.fields}*/}
{/*                                    editDialogOpenComponentId={editDialogOpenComponentId}*/}
{/*                                    setEditDialogOpenComponentId={setEditDialogOpenComponentId}*/}
{/*                                    color={siteSetting.color}*/}
{/*                                    dragFunc={(e) => dragFunc(e, idNumber)}*/}
{/*                                    removeItemFunc={() => removeItemFunc(idNumber)}*/}
{/*                                    isDesktop={isDesktop} key={item.uniqueId}*/}
{/*                                    editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}*/}
{/*                                    item={item}/>}*/}
{/*        {item.idType === "postDateUpdated" &&*/}
{/*            <PostDateUpdatedComponent lastPost={lastPost}*/}
{/*                                      fields={components.find(c => c.uid === item.uid)?.fields}*/}
{/*                                      editDialogOpenComponentId={editDialogOpenComponentId}*/}
{/*                                      setEditDialogOpenComponentId={setEditDialogOpenComponentId}*/}
{/*                                      color={siteSetting.color}*/}
{/*                                      dragFunc={(e) => dragFunc(e, idNumber)}*/}
{/*                                      removeItemFunc={() => removeItemFunc(idNumber)}*/}
{/*                                      isDesktop={isDesktop} key={item.uniqueId}*/}
{/*                                      editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}*/}
{/*                                      item={item}/>}*/}

{/*        {item.idType === "postTags" &&*/}
{/*            <PostTagsComponent lastPost={lastPost} fields={components.find(c => c.uid === item.uid)?.fields}*/}
{/*                               editDialogOpenComponentId={editDialogOpenComponentId}*/}
{/*                               setEditDialogOpenComponentId={setEditDialogOpenComponentId}*/}
{/*                               color={siteSetting.color}*/}
{/*                               dragFunc={(e) => dragFunc(e, idNumber)}*/}
{/*                               removeItemFunc={() => removeItemFunc(idNumber)}*/}
{/*                               isDesktop={isDesktop} key={item.uniqueId}*/}
{/*                               editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}*/}
{/*                               item={item}/>}*/}
{/*        {item.idType === "shareButton" &&*/}
{/*            <ShareButtonComponent lastPost={lastPost} fields={components.find(c => c.uid === item.uid)?.fields}*/}
{/*                                  editDialogOpenComponentId={editDialogOpenComponentId}*/}
{/*                                  setEditDialogOpenComponentId={setEditDialogOpenComponentId}*/}
{/*                                  color={siteSetting.color}*/}
{/*                                  dragFunc={(e) => dragFunc(e, idNumber)}*/}
{/*                                  removeItemFunc={() => removeItemFunc(idNumber)}*/}
{/*                                  isDesktop={isDesktop} key={item.uniqueId}*/}
{/*                                  editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}*/}
{/*                                  item={item}/>}*/}


{/*        /!*{item.idType === "component" && <ComponentGenerator dragFunc={(e)=>dragFunc(e,idNumber)} removeItemFunc={()=>removeItemFunc(idNumber)} isDesktop={isDesktop} key={item.uniqueId} editItem={(key,value)=>editItem(idNumber,key,value)} item={item.addedItems} />}*!/*/}
{/*        /!*{item.idType === "iconPicker" && <Paragraph />}*!/*/}
{/*        </div>*/}
{/*    )*/}
{/*}*/}
{/*}*/}

{/*export default ComponentGenerator;*/}
         </>
)
}