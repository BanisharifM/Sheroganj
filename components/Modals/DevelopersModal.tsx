import {Grow} from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Modal from "@material-ui/core/Modal";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    modal_container: {
      width: "calc((315/375)*100vw)",
      height: "647px",
      borderRadius: "30px",
      border: "solid 1px #979797",
      outline: "none",
      [theme.breakpoints.up("md")]: {
        height: "749px",
      },
    },
    section_title: {
      fontSize: "24px",
      width: "247px",
      paddingTop: "40px",
      [theme.breakpoints.up("md")]: {
        width: "800px",
        fontSize: "48px",
        paddingTop: "80px",
      },
    },
    logo_container: {
      width: "150px",
      height: "150px",
      marginTop: "50px",
      [theme.breakpoints.up("md")]: {
        marginTop: "70px",
      },
    },
    company_name: {
      fontSize: "16px",
      marginTop: "20px",
      [theme.breakpoints.up("md")]: {
        marginTop: "30px",
        fontSize: "21px",
      },
    },
    company_description: {
      fontSize: "14px",
      width: "255px",
      marginTop: "20px",
      [theme.breakpoints.up("md")]: {
        width: "487px",
        marginTop: "10px",
        fontSize: "14px",
        lineHeight: "30px",
      },
    },
    footer_container: {
      width: "255px",
      height: "165px",
      borderTopRightRadius: "30px",
      borderTopLeftRadius: "30px",
      [theme.breakpoints.up("md")]: {
        width: "375px",
        height: "120px",
      },
    },
    btn: {
      width: "195px",
      height: "50px",
      borderRadius: "35px",
      [theme.breakpoints.up("md")]: {
        width: "60px",
        height: "60px",
      },
    },
    site_container: {
      width: "195px",
      height: "30px",
    },
    site_name: {
      fontSize: "16px",
      width: "126px",
      marginLeft: "10px",
      lineHeight: "12px",
    },
    divider: {
      width: "4px",
      height: "30px",
      borderRadius: "2.5px",
    },
    close_btn: {
      width: "55px",
      height: "55px",
      top: "-75px",
    },
  })
);

const DevelopersModal = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Grow in={open} timeout={400}>
          <div className={`bg-white ${classes.modal_container} relative`}>
            <p className={` ${classes.section_title} text-center font-bold text-secondary-main mx-auto `}>
              {`
              توسعه دهنده اپلیکیشن و وبسایت `}
              <span className='text-primary-main'>{`شعر و گنج `}</span>
            </p>
            <div className={`mx-auto ${classes.logo_container} `}>
              <img width={150} src='/images/logo.png' alt='logo' />
            </div>
            <p className={`${classes.company_name} text-primary-main font-semibold text-center`}>شرکت برنامه نویسی</p>
            <p className={`${classes.company_description} font-medium mx-auto text-secondary-main text-center`}>
              لورم ایپسوم متن ساختگی باتولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
              صنعت چاپ.
            </p>
            <div
              className={`${classes.footer_container} bg-secondary-light absolute bottom-0 right-1/2 transform translate-x-1/2
                flex flex-col justify-around py-4
                md:flex-row-reverse items-center justify-around py-0
              `}
            >
              <div className={`${classes.site_container} mx-auto flex flex-row-reverse items-center md:mx-0 `}>
                <span className={`${classes.divider} block bg-primary-main`} />
                <span className={`${classes.site_name}  text-white`}>WWW.Sitename.ir</span>
              </div>
              <div>
                <button className={`${classes.btn} block mx-auto bg-primary-main flex justify-center items-center`}>
                  <img src='/images/arrow-right.svg' alt='arrow' />
                </button>
              </div>
            </div>
          </div>
        </Grow>
      </Modal>
    </div>
  );
};

export default DevelopersModal;
