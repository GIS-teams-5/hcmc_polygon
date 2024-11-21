// author: Tieu Vo Hong Han
function createThreePublicPoint(Point, Graphic) {
  const publicPoints = [
    {
      name: "Vietnam Bankers Association",
      longitude: 106.70423786749457,
      latitude: 10.769599186091465,
      address:
        "8 Đ. Võ Văn Kiệt, Phường Nguyễn Thái Bình, Quận 1, Hồ Chí Minh 70000, Vietnam",
      phoneNumber: "02838213957",
      url: "https://napsg-web.s3.amazonaws.com/symbology/data/PNG9/infrastructure/CRTINS_FINANC/FDIC_InsuredBanks_256x256.png",
      image:
        "https://cafefcdn.com/thumb_w/640/203337114487263232/2023/11/22/nhnn-17006602955151100543589-0-59-769-1289-crop-1700660304811454439439.png",
    },
    {
      name: "Military Hospital 175",
      longitude: 106.68005742701499,
      latitude: 10.819904122762964,
      address: "786 Đ. Nguyễn Kiệm, Phường 3, Gò Vấp, Hồ Chí Minh, Vietnam",
      phoneNumber: "19001175",
      url: "https://napsg-web.s3.amazonaws.com/symbology/data/PNG9/lifelines/Health_and_Medical/health-and-medical-with-label-red-halo_256x256.png",
      image:
        "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-asm/blog/benh-vien-quan-y-115.webp",
    },
    {
      name: "Tan Son Nhat International Airport",
      longitude: 106.66407794639869,
      latitude: 10.816075698832357,
      address: "Đ. Trường Sơn, Phường 2, Tân Bình, Hồ Chí Minh, Vietnam",
      phoneNumber: "02838485383",
      url: "https://napsg-web.s3.amazonaws.com/symbology/data/PNG9/lifelines/Transportation/transportation_aviation-green-halo_256x256.png",
      image:
        "https://sbay.com.vn/upload/editor/%E1%BA%A2nh%20%20%C4%91%C3%A0o%20t%E1%BA%A1o%20h%E1%BB%87%20th%E1%BB%91ng/tan-son-nhat.jpg",
    },
  ];
  console.log(publicPoints);
  const graphicList = [];
  publicPoints.forEach((publicPoint) => {
    const point = new Point({
      longitude: publicPoint.longitude,
      latitude: publicPoint.latitude,
    });

    var symbol = {
      type: "picture-marker", // autocasts as new PictureMarkerSymbol()
      url: publicPoint.url,
      width: "32px",
      height: "32px",
    };

    // create attributes
    const attributes = {
      Name: publicPoint.name,
      Location: publicPoint.address,
      PhoneNumber: publicPoint.phoneNumber,
      Image: publicPoint.image,
    };
    // Create popup template
    const popupTemplate = {
      title: publicPoint.name,
      content:
        "<div class='popup-content'><img src='{Image}' height='200px' alt='image description'></div> <br> <b>{Name}</b> located at <b>{Location}</b>. <br> Phone Number: <b>{PhoneNumber}</b>",
    };

    const pointGraphic = new Graphic({
      geometry: point,
      symbol: symbol,
      attributes: attributes,
      popupTemplate: popupTemplate,
    });
    graphicList.push(pointGraphic);
  });
  return graphicList;
}
