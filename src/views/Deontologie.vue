<template>
    <div class="deontologie-page">
        <h1 class="page-title">{{$router.options.routes.find(route => route.name === 'deontologie').label}}</h1>
        <div class="content">
            <el-row>
                <el-col :xs="24" :md="12">
                    <p>
                        La déontologie est l'ensemble des règles et devoirs qui incombent au praticien dans l'exercice de sa profession, vis-à-vis de ses clients, de ses confrères et de ses auxiliaires.<br>
                        Comme les autres professions, le Tatouage et le Piercing ont leur code de déontologie.
                    </p>
                </el-col>
                <el-col :xs="24" :md="12">
                    <p>
                        L'hygiène est au coeur de nos préoccupations. Nous portons des gants et stérilisons nos outils avant chaque tatouage ou piercing.<br>
                        Vous pouvez retrouver ci-dessous le certificat d'hygiène qui témoigne de cette valeur que Tattoo Studio porte.<br>
                        N'hésitez pas à poser vos questions concernant ce sujet, nous nous ferons un plaisir d'y répondre.
                    </p>
                </el-col>
                <el-col :xs="24" :md="12">
                    <div class="video-youtube">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/bwTu-XmPzQc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </el-col>
                <el-col :xs="24" :md="12">
                    <div class="certificat"></div>
                </el-col>
                <el-col :span="24">
                    <div class="deontologie">
                        <p class="preambule">
                            Le texte ci-dessous a pour objet de définir le minimum de règles que s'engagent à respecter les praticiens du Tatouage et du Piercing.
                        </p>
                        <table>
                            <tr>
                                <th>Article&nbsp;1</th>
                                <td>Ils se doivent de promouvoir le Tatouage et le Piercing, et d'en diffuser l'information selon une éthique basée sur l'hygiène.</td>
                            </tr>
                            <tr>
                                <th>Article&nbsp;2</th>
                                <td>
                                    Ils doivent se conformer aux principes suivants :<br>
                                    <ul>
                                        <li>
                                            Ne pas tatouer ou percer :
                                            <ul>
                                                <li>un mineur</li>
                                                <li>toute personne présentant un risque en matière d'hygiène</li>
                                                <li>toute personne sous l'emprise d'alcool ou de drogue</li>
                                            </ul>
                                        </li>
                                        <li>Refuser de tatouer ou de percer en un emplacement tel qu'il porterait atteinte à l'intégrité corporelle de l'être.</li>
                                        <li>Assumer un rôle de conseil auprès de ses clients : choix du motif ou du bijou, emplacement, etc.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th>Article&nbsp;3</th>
                                <td>
                                    Tout praticien est tenu de garantir à sa clientèle le respect des règles élémentaires d'hygiène, notamment et pour chaque patient :
                                    <ul>
                                        <li>de disposer d'un plan de travail désinfecté</li>
                                        <li>de n'utiliser qu'une instrumentation préalablement stérilisée (autoclave)</li>
                                        <li>de disposer de papiers jetables, de savon, de pommades, et de pansements à usage individuel</li>
                                        <li>de procéder à un lavage des mains suivant les règles hospitalières</li>
                                        <li>de porter des gants à usage unique</li>
                                        <li>de tatouer ou de percer impérativement avec des sets d'aiguilles et des embouts, ou de canules, à usage unique et sous emballage stérile</li>
                                        <li>de n'utiliser que des godets d'encres à usage unique</li>
                                        <li>de ne placer que des bijoux préalablement stérilisés</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th>Article&nbsp;4</th>
                                <td>
                                    Le lieu de travail doit comporter une aire d'attente et une aire de consultation.
                                </td>
                            </tr>
                            <tr>
                                <th>Article&nbsp;5</th>
                                <td>
                                    Il est interdit de fumer sur l'aire de travail et l'aire d'attente. Un panneau évident doit le rappeler.
                                    (Décret n°92-748 du 29 Mai 1992)
                                </td>
                            </tr>
                            <tr>
                                <th>Article&nbsp;6</th>
                                <td>
                                    Tout praticien s'engage à respecter les règles d'hygiène ci-dessus énoncées et à contribuer à leur diffusion.
                                </td>
                            </tr>
                            <tr>
                                <th>Article7</th>
                                <td>
                                    Le présent code de déontologie doit être affiché à une place aisément accessible à la clientèle, dans le lieu de travail.s
                                </td>
                            </tr>
                        </table>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'deontologie-page'
  }
</script>

<style lang="scss">
    @import "../variables";
    .deontologie-page {
        .content {
            .el-col {
                margin: 1rem 0;
            }
            p {
                margin: 0 10%;
            }
            .certificat {
                height: 20rem;
                text-align: center;
                background-image: url('/image/certificat_hygiene.jpg');
                background-position: center;
                background-size: contain;
                background-repeat: no-repeat;
                margin: 0 1rem;
            }
            .deontologie {
                .preambule {
                    padding: 0.5rem 2rem;
                    font-size: 1.5rem;
                    background: $tertiary-color;
                    margin: 1rem;
                }
                table {
                    max-width: 900px;
                    margin: 0 auto;
                    tr {
                        th, td {
                            padding: .5rem 1rem;
                        }
                        th {
                            vertical-align: top;
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: $medium-from) {
        .deontologie-page {
            .content {
                .certificat {
                    margin: -2rem 1rem;
                }
                .deontologie {
                    table {
                        tr {
                            padding: 1rem;
                            display: inline-table;
                            th {
                                display: table-header-group;
                            }
                            td {
                                display: table-footer-group;
                            }
                        }
                    }
                }
            }
        }
    }

</style>
