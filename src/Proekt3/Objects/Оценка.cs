﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Proekt3
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Оценка.
    /// </summary>
    // *** Start programmer edit section *** (Оценка CustomAttributes)

    // *** End programmer edit section *** (Оценка CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ОценкаE", new string[] {
            "ДатаПроведения as \'Дата проведения\'",
            "Сотрудники as \'Сотрудники\'",
            "Сотрудники.ФИО as \'ФИО\'",
            "Сотрудники.Должность as \'Должность\'",
            "Сотрудники.Ранг as \'Ранг\'",
            "Статус as \'Статус\'",
            "Комментарий as \'Комментарий\'"}, Hidden=new string[] {
            "Сотрудники.ФИО"})]
    [MasterViewDefineAttribute("ОценкаE", "Сотрудники", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [View("ОценкаL", new string[] {
            "ДатаПроведения as \'Дата проведения\'",
            "Сотрудники.ФИО as \'ФИО\'",
            "Статус as \'Статус\'",
            "Комментарий as \'Комментарий\'"})]
    public class Оценка : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДатаПроведения;
        
        private IIS.Proekt3.Статусы fСтатус;
        
        private string fКомментарий;
        
        private IIS.Proekt3.Сотрудники fСотрудники;
        
        // *** Start programmer edit section *** (Оценка CustomMembers)

        // *** End programmer edit section *** (Оценка CustomMembers)

        
        /// <summary>
        /// ДатаПроведения.
        /// </summary>
        // *** Start programmer edit section *** (Оценка.ДатаПроведения CustomAttributes)

        // *** End programmer edit section *** (Оценка.ДатаПроведения CustomAttributes)
        public virtual System.DateTime ДатаПроведения
        {
            get
            {
                // *** Start programmer edit section *** (Оценка.ДатаПроведения Get start)

                // *** End programmer edit section *** (Оценка.ДатаПроведения Get start)
                System.DateTime result = this.fДатаПроведения;
                // *** Start programmer edit section *** (Оценка.ДатаПроведения Get end)

                // *** End programmer edit section *** (Оценка.ДатаПроведения Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Оценка.ДатаПроведения Set start)

                // *** End programmer edit section *** (Оценка.ДатаПроведения Set start)
                this.fДатаПроведения = value;
                // *** Start programmer edit section *** (Оценка.ДатаПроведения Set end)

                // *** End programmer edit section *** (Оценка.ДатаПроведения Set end)
            }
        }
        
        /// <summary>
        /// Комментарий.
        /// </summary>
        // *** Start programmer edit section *** (Оценка.Комментарий CustomAttributes)

        // *** End programmer edit section *** (Оценка.Комментарий CustomAttributes)
        [StrLen(255)]
        public virtual string Комментарий
        {
            get
            {
                // *** Start programmer edit section *** (Оценка.Комментарий Get start)

                // *** End programmer edit section *** (Оценка.Комментарий Get start)
                string result = this.fКомментарий;
                // *** Start programmer edit section *** (Оценка.Комментарий Get end)

                // *** End programmer edit section *** (Оценка.Комментарий Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Оценка.Комментарий Set start)

                // *** End programmer edit section *** (Оценка.Комментарий Set start)
                this.fКомментарий = value;
                // *** Start programmer edit section *** (Оценка.Комментарий Set end)

                // *** End programmer edit section *** (Оценка.Комментарий Set end)
            }
        }
        
        /// <summary>
        /// Статус.
        /// </summary>
        // *** Start programmer edit section *** (Оценка.Статус CustomAttributes)

        // *** End programmer edit section *** (Оценка.Статус CustomAttributes)
        public virtual IIS.Proekt3.Статусы Статус
        {
            get
            {
                // *** Start programmer edit section *** (Оценка.Статус Get start)

                // *** End programmer edit section *** (Оценка.Статус Get start)
                IIS.Proekt3.Статусы result = this.fСтатус;
                // *** Start programmer edit section *** (Оценка.Статус Get end)

                // *** End programmer edit section *** (Оценка.Статус Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Оценка.Статус Set start)

                // *** End programmer edit section *** (Оценка.Статус Set start)
                this.fСтатус = value;
                // *** Start programmer edit section *** (Оценка.Статус Set end)

                // *** End programmer edit section *** (Оценка.Статус Set end)
            }
        }
        
        /// <summary>
        /// Оценка.
        /// </summary>
        // *** Start programmer edit section *** (Оценка.Сотрудники CustomAttributes)

        // *** End programmer edit section *** (Оценка.Сотрудники CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудники"})]
        [NotNull()]
        public virtual IIS.Proekt3.Сотрудники Сотрудники
        {
            get
            {
                // *** Start programmer edit section *** (Оценка.Сотрудники Get start)

                // *** End programmer edit section *** (Оценка.Сотрудники Get start)
                IIS.Proekt3.Сотрудники result = this.fСотрудники;
                // *** Start programmer edit section *** (Оценка.Сотрудники Get end)

                // *** End programmer edit section *** (Оценка.Сотрудники Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Оценка.Сотрудники Set start)

                // *** End programmer edit section *** (Оценка.Сотрудники Set start)
                this.fСотрудники = value;
                // *** Start programmer edit section *** (Оценка.Сотрудники Set end)

                // *** End programmer edit section *** (Оценка.Сотрудники Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ОценкаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОценкаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОценкаE", typeof(IIS.Proekt3.Оценка));
                }
            }
            
            /// <summary>
            /// "ОценкаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОценкаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОценкаL", typeof(IIS.Proekt3.Оценка));
                }
            }
        }
    }
}
