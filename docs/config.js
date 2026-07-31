var config = {
        style: 'mapbox://styles/vimalkrishnan/cms7icmfp005t01sdc4a85u13',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoidmltYWxrcmlzaG5hbiIsImEiOiJjbXM5Mno1ajgwOHA2MnpzY2Jobmk1cDRtIn0.3C5BWAJakNTmKtmiCB8TEQ',
    //  showMarkers: true,
     markerColor: '#EBB263',
     projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'The Temple Murals of Kochi',
    subtitle: 'There are ancient murals in the temples of Kochi. Some are protected as heritage, while others are not.',
    byline: 'By  Vimal Krishnan R',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template. <br><br>Rainer Halama, Mattancherry Palace-16-17th Century mural paintings-Scenes from the Ramayana-WUS09250, resized the image, added Interactivity, etc. by Vimal Krishnan R, CC BY-SA 4.0',
    chapters: [
        
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: "Kerala, God's Own Country",
            // image: './assets/washington-dc.jpg',
            description: "Kerala is known as God's Own Country. Although this tagline is used in a tourism context, the many temples that dot Kerala's landscape make it quite literal.  ",
            location: {
                center: [76.259349, 9.9582986],
                zoom: 7.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Temple Density in Ernakulam',
            // image: './assets/san-fran.jpeg',
            description: 'Like other districts, Ernakulam, in central Kerala, has a high density of temples. Ernakulam is home to Kochi, a historic port city.<br><br>A basic survey of temples within a 10 km radius in four hubs of Ernakulam district would reveal just over 200 temples.',
            location: {
                center: [76.259349, 9.9582986],
                zoom: 10,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Murals',
            image: './assets/2.jpg',
            description: 'Many of these temples have murals that were painted in the 15th to the 19th century.',
            location: {
                center: [76.259349, 9.9582986],
                zoom: 12,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        // {
        //     id: 'fourth-chapter',
        //     alignment: 'fully',
        //     hidden: false,
        //     title: 'Buenos Aires',
        //     image: './assets/buenos-aires.jpg',
        //     description: 'Buenos Aires, the capital of Argentina, is a dynamic city known for its European-inspired architecture, vibrant tango culture, and rich culinary scene. Often called the "Paris of South America," it blends historic charm with modern energy.  You can add as many chapters as you need, just copy the JSON data and make changes.',
        //     location: {
        //         center: [76.3594195, 9.9100883],
        //         zoom: 12.52,
        //         pitch: 8.01,
        //         bearing: 0
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [],
        //     onChapterExit: []
        // }
    ]
};
