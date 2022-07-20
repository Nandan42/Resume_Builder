//firstname,lastname,email,phone,profile,skill1,skill2,skill4,skill5,skill6,college,collegeYear,collegeQualification,collegeDescription,company1,role1,startDate1,endDate1,experience1,company2,role2,startDate2,endDate2,experience2,github,linkedin
module.exports = (body) => {
    return(
        `<!doctype html>
        <html>
        <head>          
            <meta charset="utf-8">
            <meta http-equiv="content-type" content="text/html; charset=utf-8" />

            <meta name="keywords" content="" />
            <meta name="description" content="" />

        </head>
        <body>

        <div id="doc2" class="yui-t7">
            <div id="inner">
            
                <div id="hd">
                    <div class="yui-gc">
                        <div class="yui-u first">
                            <h1>${body.firstname} ${body.firstname}</h1>
                            <h2>${body.role1}</h2>
                        </div>

                        <div class="yui-u">
                            <div class="contact-info">
                                <h3><a href="">${body.email}</a></h3>
                                <h3>${body.phone}</h3>
                            </div>
                        </div>
                    </div>

                <div id="bd">
                    <div id="yui-main">
                        <div class="yui-b">

                            <div class="yui-gf">
                                <div class="yui-u first">
                                    <h2>Profile</h2>
                                </div>
                                <div class="yui-u">
                                    <p class="enlarge">
                                        ${body.profile}
                                    </p>
                                </div>
                            </div>

   
                            <div class="yui-gf">
                                <div class="yui-u first">
                                    <h2>Skills</h2>
                                </div>
                                <div class="yui-u">
                                    <ul class="talent">
                                        <li>${body.skill1}</li>
                                        <li>${body.skill2}</li>
                                        <li class="last">${body.skill3}</li>
                                        <li>${body.skill4}</li>
                                        <li>${body.skill5}</li>
                                        <li class="last">${body.skill6}</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="yui-gf">
            
                                <div class="yui-u first">
                                    <h2>Experience</h2>
                                </div>

                                <div class="yui-u">

                                    <div class="job">
                                        <h2>${body.company1}</h2>
                                        <h3>${body.role1}</h3>
                                        <h4>${body.startDate1}-${body.endDate1}</h4>
                                        <p>${body.experience1} </p>
                                    </div>

                                    <div class="job">
                                        <h2>${body.company2}</h2>
                                        <h3>${body.role2}</h3>
                                        <h4>${body.startDate2}-${body.endDate2}</h4>
                                        <p>${body.experience2} </p>
                                    </div>
                                </div>
                            </div>


                            <div class="yui-gf last">
                                <div class="yui-u first">
                                    <h2>Education</h2>
                                </div>
                                <div class="yui-u">
                                    <h2>${body.college}</h2>
                                    <h3>${body.collegeQualification} &mdash; <strong>4.0 GPA</strong> </h3>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                <div id="ft">
                    <p>${body.firstname} ${body.lastname} &mdash; <a href="${body.email}">${body.email}</a> &mdash; ${body.phone}</p>
                </div>
                <div id="ft">
                    <p><a href="${body.github}">${body.github}</a> </p>
                    <p><a href="${body.linkedin}">${body.linkedin}</a> </p>
                </div>

            </div>


        </div>
        </div>


        </body>
        </html>
    `);
}